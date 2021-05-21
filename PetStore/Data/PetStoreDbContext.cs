using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PetStore.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Data
{
    public class PetStoreDbContext : IdentityDbContext<UserEntity>
    {
        public PetStoreDbContext(DbContextOptions options) : base(options) { }

        public DbSet<ProductEntity> Product { get; set; }
        public DbSet<ProductCategoryEntity> ProductCategory { get; set; }
        public DbSet<OrderEntity> Order { get; set; }
        public DbSet<OrderItemEntity> OrderItem { get; set; }
    }
}
