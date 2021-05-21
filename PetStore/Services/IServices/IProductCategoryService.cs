using PetStore.Models;
using System.Collections.Generic;

namespace PetStore.Services
{
    public interface IProductCategoryService
    {
        int Add(ProductCategoryModel model);
        void Delete(int id);
        void Edit(ProductCategoryModel model);
        List<ProductCategoryModel> Get();
        ProductCategoryModel Get(int id);
    }
}