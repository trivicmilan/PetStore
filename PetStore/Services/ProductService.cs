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
    public class ProductService : IProductService
    {
        private PetStoreDbContext _dbContext;
        public ProductService(PetStoreDbContext petStoreDbContext)
        {
            _dbContext = petStoreDbContext;
        }

        public int Add(ProductModel model)
        {
            var newProduct = model.Adapt<ProductEntity>();

            _dbContext.Add(newProduct);
            _dbContext.SaveChanges();

            return newProduct.ProductId;
        }

        public void Edit(ProductModel model)
        {
            var product = _dbContext.Product.Find(model.ProductId);
            if (product == null)
            {
                throw new Exception("Request entity was not found!");
            }
            model.Adapt<ProductModel, ProductEntity>(product);

            _dbContext.Update(product);
            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var product = _dbContext.Product.Find(id);
            if (product == null)
            {
                throw new Exception("Request entity was not found!");
            }
            _dbContext.Remove(product);
            _dbContext.SaveChanges();
        }

        public List<ProductModel> Get()
        {
            return _dbContext.Product
                .ProjectToType<ProductModel>()
                .ToList();

        }

        public ProductModel Get(int id)
        {
            return _dbContext.Product
                .Where(x => x.ProductId == id)
                .ProjectToType<ProductModel>()
                .FirstOrDefault();
        }

        List<ProductModel> IProductService.Get(int page, int pageSize, int productCategoryId, string searchName)
        {
            return _dbContext.Product
                .Where(x => productCategoryId == 0 || x.ProductCategoryId == productCategoryId)
                .Where(x => searchName == null || x.Name.ToLower().Contains(searchName.ToLower()))
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ProjectToType<ProductModel>()
                .ToList();
        }
    }
}
