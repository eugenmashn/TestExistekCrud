using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackCrud.Models;
using DataAccessLayer.Models;
using DataAccessLayer.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackCrud.Controllers
{

    public class AuthorController : ApiController
    {
        IEFGenericRepository<Author> EFRepositoryAuthor;

        public AuthorController(IEFGenericRepository<Author> eFRepositoryAuthor)
        {
            EFRepositoryAuthor = eFRepositoryAuthor;
        }
        [HttpPost]
        [Route(nameof(CreateAuthor))]
        public async Task<ActionResult<Author>> CreateAuthor(AuthorRequired author)
        {
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(await EFRepositoryAuthor.Create(new Author()
            {
                Address = author.Address,
                Email = author.Email,
                BirtDay = Convert.ToDateTime(author.BirtDay),
                FullName = author.FullName,
                Age = author.Age
            }));
        }
        [HttpPost]
        [Route(nameof(GetAuthors))]
        public async Task<ActionResult<IList<Author>>> GetAuthors(ParametersFilterSortPage parametersFilterSortPage)
        {
           
            ServicesDataAuthor servicesDataAuthor = new ServicesDataAuthor(EFRepositoryAuthor);
            return Ok(await servicesDataAuthor.GetDataFilteringSortingPaging(parametersFilterSortPage.Filter, parametersFilterSortPage.Sort, parametersFilterSortPage.Page, parametersFilterSortPage.NumberItem));
        }
        [HttpPut]
        [Route(nameof(UpdateAuthor))]
        public async Task<ActionResult<Author>> UpdateAuthor(AuthorRequired author)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(await EFRepositoryAuthor.Update((new Author()
            {
                AuthorId = author.AuthorId,
                Address = author.Address,
                Email = author.Email,
                BirtDay = Convert.ToDateTime(author.BirtDay),
                FullName = author.FullName,
                Age = author.Age
            })));
        }


        [HttpDelete]
        [Route(nameof(DeleteAuthor) + "/{authorId}")]
        public ActionResult DeleteAuthor(Guid authorId)
        {
            try
            {
                var author = EFRepositoryAuthor.FindById(authorId);
                if (author == null)
                    return BadRequest();
                EFRepositoryAuthor.Remove(author);
                 return Ok(author);
            }
            catch
            {
                return BadRequest();
            }
            
        }
    }
}
