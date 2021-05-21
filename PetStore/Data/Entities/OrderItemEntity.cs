using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Data.Entities
{
    public class OrderItemEntity
    {
        [Key]
        public int OrderItemId { get; set; }

        [Required]
        public int OrderId { get; set; }
        public OrderEntity Order { get; set; }

        [Required]
        public int ProductId { get; set; }
        public ProductEntity Product { get; set; }

        [Required]
        public decimal Price { get; set; }
        [Required]
        public int Quantity { get; set; }
        
    }
}
