
using DataAccessLayer.Models;
using DataAccessLayer.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;



namespace DataAccessLayer.Models
{
    public class ServicesDataAuthor
    {

        IEFGenericRepository<Author> EFRepositoryAuthor;
        public ServicesDataAuthor(IEFGenericRepository<Author> eFRepositoryAuthor)
        {
            EFRepositoryAuthor = eFRepositoryAuthor;
        }
       

        public async Task<List<Author>> GetDataFilteringSortingPaging(List<Filter> filters, Sort sort, int page = 1, int number = 10)
        {
            var result = EFRepositoryAuthor.Get();
            PropertyInfo[] propertyInfoAuthor = typeof(Author).GetProperties();
            if (filters != null)
            {
                foreach (var filter in filters)
                {
                    if (filter.PropertyName == "FullName")
                        result = result.Where(i => i.FullName.Contains(filter.value));
                    if (filter.PropertyName == "Address")
                        result = result.Where(i => i.Address.Contains(filter.value));
                }
            }
            if(sort != null)
            {
                if (sort.ProperyName == "FullName" && sort.Ascending == true)
                    result = result.OrderBy( i => i.FullName);
                if (sort.ProperyName == "FullName" && sort.Ascending == false)
                    result = result.OrderByDescending(i => i.FullName);
                if (sort.ProperyName == "Address" && sort.Ascending == true)
                    result = result.OrderBy(i => i.Address);
                if (sort.ProperyName == "Address" && sort.Ascending == false)
                    result = result.OrderByDescending(i => i.Address);
            }

            result = result.Skip((page - 1) * number)
                .Take(number);
            return await result.ToListAsync();
        }
    }
}
