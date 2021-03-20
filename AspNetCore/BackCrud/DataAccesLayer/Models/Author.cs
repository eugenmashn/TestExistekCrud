using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessLayer.Models
{
    public class Author
    {
        [Key]
        public Guid AuthorId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public DateTime? BirtDay { get; set; }
        public List<Post> Posts { get; set; }
    }
}
