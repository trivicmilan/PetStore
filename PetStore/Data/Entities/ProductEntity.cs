using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Data.Entities
{
    public class ProductEntity
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [MaxLength(10)]
        public string Code { get; set; }
        public decimal Price { get; set; }
        public int QuantityAvailable { get; set; }
        [MaxLength(500)]
        public string Description { get; set; }

        public int ProductCategoryId { get; set; }
        public ProductCategoryEntity ProductCategory { get; set; }


        public List<OrderItemEntity> OrderItems { get; } = new List<OrderItemEntity>();
    }
}
