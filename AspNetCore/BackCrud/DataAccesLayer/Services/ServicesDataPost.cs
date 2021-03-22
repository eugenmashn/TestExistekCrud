using DataAccessLayer.Models;
using DataAccessLayer.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DataAccesLayer.Services
{
    public class ServicesDataPost
    {
        IEFGenericRepository<Post> EFRepositoryPost;
        public ServicesDataPost(IEFGenericRepository<Post> eFRepositoryPost)
        {
            EFRepositoryPost = eFRepositoryPost;
        }


        public async Task<List<Post>> GetDataFilteringSortingPaging(List<Filter> filters, Sort sort, int page = 1, int number = 10)
        {
            IQueryable<Post> result = EFRepositoryPost.IncludeGet(i => i.Author);
            if (filters != null)
            {
                foreach (var filter in filters)
                {
                    if (filter.PropertyName == "Title"  && !string.IsNullOrEmpty(filter.value))
                        result = result.Where( i => i.Title.Contains(filter.value));
                    if (filter.PropertyName == "AuthorId" && !string.IsNullOrEmpty(filter.value))
                        result = result.Where(i => i.AuthorId == Guid.Parse(filter.value));
                }
            }
            if (sort != null)
            {
                if (sort.ProperyName == "Title" && sort.Ascending == true)
                    result = result.OrderBy(i => i.Title);
                if (sort.ProperyName == "Title" && sort.Ascending == false)
                    result = result.OrderByDescending(i => i.Title);
                if (sort.ProperyName == "DateCreated" && sort.Ascending == true)
                    result = result.OrderBy(i => i.DateCreated);
                if (sort.ProperyName == "DateCreated" && sort.Ascending == false)
                    result = result.OrderByDescending(i => i.DateCreated);
            }

            result = result.Skip((page - 1) * number)
                .Take(number);
            return await result.ToListAsync();
        }
    }
}
