using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackCrud.Models
{
    public class PostResponse
    {
        public string Tiltle { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public Author Author { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
