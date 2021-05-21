﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Models
{
    public class OrderItemModel
    {
        public int? OrderItemId { get; set; }
        public int? OrderId { get; set; }

        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public decimal? Price { get; set; }
        public int? Quantity { get; set; }
    }
}
