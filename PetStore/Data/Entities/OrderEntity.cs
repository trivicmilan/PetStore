using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Data.Entities
{
    public class OrderEntity
    {
        [Key]
        public int OrderId { get; set; }

        [MaxLength(50)]
        public string FirstName { get; set; }
        [MaxLength(50)]
        public string LastName { get; set; }
        [MaxLength(50)]
        public string Address { get; set; }
        [MaxLength(1)]
        public string Status { get; set; }


        public List<OrderItemEntity> OrderItems { get; } = new List<OrderItemEntity>();
    }
}
