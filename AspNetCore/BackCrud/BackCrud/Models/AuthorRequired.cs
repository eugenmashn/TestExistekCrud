using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackCrud.Models
{
    public class AuthorRequired
    {
        public Guid AuthorId { get; set; }
        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}", ErrorMessage = "Некоректна пошта")]
        public string Email { get; set; }
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Довжина строки повина бути від 3 до 50")]
        public string FullName { get; set; }
        [Required(ErrorMessage = "Не вказано адреси")]
        public string Address { get; set; }
        [Required(ErrorMessage = "Не вказано дати народження")]
        public string BirtDay { get; set; }
        [Range(1, 110, ErrorMessage = "Вік має бути від 1 до 110")]
        public int Age { get; set; }
    }
}
