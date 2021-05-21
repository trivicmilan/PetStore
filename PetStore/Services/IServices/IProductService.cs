using PetStore.Models;
using System.Collections.Generic;

namespace PetStore.Services
{
    public interface IProductService
    {
        int Add(ProductModel model);
        void Delete(int id);
        void Edit(ProductModel model);
        List<ProductModel> Get();
        List<ProductModel> Get(int page, int pageSize, int productCategoryId = 0, string searchName = null);
        ProductModel Get(int id);
    }
}