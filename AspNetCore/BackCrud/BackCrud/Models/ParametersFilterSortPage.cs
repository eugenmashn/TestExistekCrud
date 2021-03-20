using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackCrud.Models
{
    public class ParametersFilterSortPage
    {
        public List<Filter> Filter { get; set; }
        public Sort Sort { get; set; }
        public int Page  { get; set; } = 1;
        public int NumberItem { get; set; } = 10;
    }
}
