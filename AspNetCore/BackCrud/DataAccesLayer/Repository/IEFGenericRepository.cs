﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
namespace DataAccessLayer.Repository
{
    public interface IEFGenericRepository<TEntity> where TEntity : class
    {
        Task<TEntity> Create(TEntity item);

        TEntity FindById(Guid id);
        TEntity FindById(Func<TEntity, bool> predicate);
        IQueryable<TEntity> Get();
        IQueryable<TEntity> Get(Func<TEntity, bool> predicate);
        void Remove(TEntity item);
        int Count(Func<TEntity, bool> predicate);
        int Count();
        Task<TEntity> FindAsyncMethod(Expression<Func<TEntity, bool>> predicate);
        Task AddAsyn(TEntity item);
        IQueryable<TEntity> GetSort(Func<TEntity, string> predicate);
        Task<TEntity> Update(TEntity item);
        IQueryable<TEntity> IncludeGet(Expression<Func<TEntity, object>> includes);
    }
}
