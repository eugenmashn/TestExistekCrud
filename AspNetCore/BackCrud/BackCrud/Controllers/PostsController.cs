using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackCrud.Models;
using DataAccesLayer.Services;
using DataAccessLayer.Models;
using DataAccessLayer.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BackCrud.Controllers
{
    [ApiController]
    public class PostsController : ApiController
    {

        IEFGenericRepository<Post> EFRepositoryPost;
        public PostsController(IEFGenericRepository<Post> eFRepositoryPost)
        {
            EFRepositoryPost = eFRepositoryPost;
        }
        [HttpPost]
        [Route(nameof(CreatePost))]
        public async Task<ActionResult<Author>> CreatePost(PostRequired post)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(await EFRepositoryPost.Create(new Post()
            {
               Title = post.Title,
               ImgUrl = post.ImgUrl,
               AuthorId = post.AuthorId,
               Description = post.Description,
               DateCreated = DateTime.Now
            }));
        }
        [HttpPost]
        [Route(nameof(GetPosts))]
        public async Task<ActionResult<IList<Author>>> GetPosts(ParametersFilterSortPage parametersFilterSortPage)
        {

            ServicesDataPost servicesDataPost = new ServicesDataPost(EFRepositoryPost);
            return Ok(await servicesDataPost.GetDataFilteringSortingPaging(parametersFilterSortPage.Filter, parametersFilterSortPage.Sort, parametersFilterSortPage.Page, parametersFilterSortPage.NumberItem));
        }

        [HttpPut]
        [Route(nameof(UpdatePost))]
        public async Task<ActionResult<Author>> UpdatePost(PostRequired post)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(await EFRepositoryPost.Update(new Post()
            {
                PostId = post.PostId,
                Title = post.Title,
                ImgUrl = post.ImgUrl,
                AuthorId = post.AuthorId,
                Description = post.Description,
                DateCreated = post.DateCreated
            }));
        }


        [HttpDelete]
        [Route(nameof(DeletePost) + "/{postId}")]
        public ActionResult DeletePost(Guid postId)
        {
            try
            {
                var post = EFRepositoryPost.FindById(postId);
                EFRepositoryPost.Remove(post);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        
        [HttpGet]
        [Route(nameof(GetPostById) + "/{postId}")]
        public ActionResult GetPostById(Guid postId)
        {
            var post =  EFRepositoryPost.IncludeGet(i =>i.Author).FirstOrDefault( i=>i.PostId == postId);
            if(post != null)
                return Ok(post);
            return BadRequest();
        }
    }
}
