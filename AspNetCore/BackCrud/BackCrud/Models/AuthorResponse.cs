using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackCrud.Models
{
    public class AuthorResponse
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public DateTime BirtDay { get; set; }
        public int Age { get; set; }
    }
}
