using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace DataAccessLayer.Models
{
    public class PostsContext:DbContext
    {
        public DbSet<Author> Authors { get; set; }
        public DbSet<Post> Posts { get; set; }
        public PostsContext(DbContextOptions<PostsContext> options)
            : base(options)
        {
            
        }
         
        public PostsContext()
            :base()
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<Post>()
                .HasOne(s => s.Author)
                .WithMany(g => g.Posts)
                .HasForeignKey(x => x.AuthorId)
                .IsRequired(false)
                 .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
