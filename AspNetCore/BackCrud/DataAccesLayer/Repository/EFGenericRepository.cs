﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using DataAccessLayer.Models;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class EFGenericRepository<TEntity> : IEFGenericRepository<TEntity> where TEntity : class
    {
        private readonly PostsContext _context;
        DbSet<TEntity> _dbSet;

        public EFGenericRepository(PostsContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }
        public IQueryable<TEntity> Get()
        {
            return _dbSet;
        }
        public TEntity FindById(Guid id)
        {

            return _dbSet.Find(id);
        }
        public async Task<TEntity> FindAsyncMethod(Expression<Func<TEntity, bool>> predicate)
        {

            return await _dbSet.FirstOrDefaultAsync(predicate);
        }
        public async Task AddAsyn(TEntity item)
        {
            _dbSet.Add(item);
            await _context.SaveChangesAsync();
        }
        public TEntity FindById(Func<TEntity, bool> predicate)
        {

            var item = _dbSet.FirstOrDefault(predicate);

            return item;
        }

        public async Task<TEntity> Create(TEntity item)
        {
             _dbSet.Add(item);
            await _context.SaveChangesAsync();
            return (item);
        }
        public async Task<TEntity> Update(TEntity item)
        {
            _context.Update(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public void Remove(TEntity item)
        {
            if (item != null)
            {
                //_context.Database.ExecuteSqlCommand("ALTER TABLE dbo.People ADD CONSTRAINT Peoples_Teams FOREIGN KEY (TeamId) REFERENCES dbo.Teams (Id) ON DELETE SET NULL");
                // _context.Entry(item).State = EntityState.Modified;
                //_dbSet.Attach(item);
                _dbSet.Remove(item);
                _context.SaveChanges();

            }
        }
        /* public async Task<TEntity> GetAsync(Expression< Func<TEntity, bool>> predicate)
         {
             return await _dbSet.FirstOrDefaultAsync(predicate);
         }*/
        public  IQueryable<TEntity> IncludeGet(Expression<Func<TEntity, object>> includes)
        {


            IQueryable<TEntity> query = null;

            query = _dbSet.Include(includes);


            return query;
        }
        public int Count(Func<TEntity, bool> predicate)
        {
            return _dbSet.Count(predicate);
        }
        public int Count()
        {
            return _dbSet.Count();
        }

        public IQueryable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            return _dbSet.Where(predicate).AsQueryable();
        }
        public IQueryable<TEntity> GetSort(Func<TEntity, string> predicate)
        {
            return _dbSet.OrderBy(predicate).AsQueryable();
        }
    }

}
