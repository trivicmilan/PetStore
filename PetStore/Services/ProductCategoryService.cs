using Mapster;
using PetStore.Data;
using PetStore.Data.Entities;
using PetStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Services
{
    public class ProductCategoryService : IProductCategoryService
    {
        private PetStoreDbContext _dbContext;
        public ProductCategoryService(PetStoreDbContext petStoreDbContext)
        {
            _dbContext = petStoreDbContext;
        }

        public int Add(ProductCategoryModel model)
        {
            var newProductCategory = model.Adapt<ProductCategoryEntity>();

            _dbContext.Add(newProductCategory);
            _dbContext.SaveChanges();

            return newProductCategory.ProductCategoryId;
        }

        public void Edit(ProductCategoryModel model)
        {
            var productCategory = _dbContext.ProductCategory.Find(model.ProductCategoryId);
            if (productCategory == null)
            {
                throw new Exception("Request entity was not found!");
            }
            model.Adapt<ProductCategoryModel, ProductCategoryEntity>(productCategory);

            _dbContext.Update(productCategory);
            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var productCategory = _dbContext.ProductCategory.Find(id);
            if (productCategory == null)
            {
                throw new Exception("Request entity was not found!");
            }
            _dbContext.Remove(productCategory);
            _dbContext.SaveChanges();
        }
        public List<ProductCategoryModel> Get()
        {
            var result = _dbContext.ProductCategory
                .ProjectToType<ProductCategoryModel>()
                .ToList();

            return result;
        }

        public ProductCategoryModel Get(int id)
        {
            return _dbContext.ProductCategory
                .Where( x => x.ProductCategoryId == id)
                .ProjectToType<ProductCategoryModel>()
                .FirstOrDefault();
        }
    }
}
