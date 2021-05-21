using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Models
{
    public class ProductCategoryModel
    {
        public int ProductCategoryId { get; set; }
        public string Name { get; set; }
    }
}
