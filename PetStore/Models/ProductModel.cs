using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Models
{
    public class ProductModel
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public decimal Price { get; set; }

        public int QuantityAvailable { get; set; }
        public string Description { get; set; }

        public int ProductCategoryId { get; set; }
        public string ProductCategoryName { get; set; }
    }
}
