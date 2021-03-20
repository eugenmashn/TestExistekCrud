using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace DataAccessLayer.Models
{
    public class Post
    {
        [Key]
        public Guid PostId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string ImgUrl { get; set; }
        public Guid? AuthorId { get; set; }
        public Author Author { get; set; }
    }
}
