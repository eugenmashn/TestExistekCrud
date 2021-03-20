using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Serialization;

namespace DataAccessLayer.Models
{
    public class Author
    {
        [Key]
        public Guid AuthorId { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string FullName { get; set; }
        public DateTime BirtDay { get; set; }
        [JsonIgnore]
        public List<Post> Posts { get; set; }
        public int Age { get; set; }
    }
}
