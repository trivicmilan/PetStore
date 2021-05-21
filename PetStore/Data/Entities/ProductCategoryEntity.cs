using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Data.Entities
{
    public class ProductCategoryEntity
    {
        [Key]
        public int ProductCategoryId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public List<ProductEntity> Products { get; } = new List<ProductEntity>();
    }
}
