using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackCrud.Models
{
    public class PostRequired
    {
        public Guid PostId { get; set; }
        [Required(ErrorMessage = "Не вказано назву")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Не вказано опис")]
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        [Required(ErrorMessage = "Не вказано автора")]
        public Guid AuthorId { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
