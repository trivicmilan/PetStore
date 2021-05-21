using Mapster;
using PetStore.Data;
using PetStore.Data.Entities;
using PetStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Services
{
    public class OrderService : IOrderService
    {
        private PetStoreDbContext _dbContext;
        public OrderService(PetStoreDbContext petStoreDbContext)
        {
            _dbContext = petStoreDbContext;
        }

        public int AddOrderItem(OrderItemModel item)
        {
            var product = _dbContext.Product.FirstOrDefault(x => x.ProductId == item.ProductId);
            if (product == null)
            {
                throw new Exception("Request entity was not found!");
            }
            else if(product.QuantityAvailable < 1)
            {
                throw new Exception("No products available!");
            }

            OrderEntity order;
            OrderItemEntity orderItem = null;
            if (item.OrderId != null && _dbContext.Order.Any(x => x.OrderId == item.OrderId && x.Status == "N"))
            {
                order = _dbContext.Order.First(x => x.OrderId == item.OrderId && x.Status == "N");
                orderItem = _dbContext.OrderItem.FirstOrDefault(x => x.OrderId == order.OrderId && x.ProductId == product.ProductId);
            }
            else
            {
                order = new OrderEntity() { Status = "N" };
                _dbContext.Add(order);
            }

            bool isNewItem = false;
            if (orderItem == null)
            {
                orderItem = new OrderItemEntity() { OrderId = order.OrderId, ProductId = product.ProductId };
                isNewItem = true;
            }
            orderItem.Price = product.Price;
            orderItem.Quantity += item.Quantity ?? 1;

            if (isNewItem)
            {
                order.OrderItems.Add(orderItem);
            }
            else
            {
                _dbContext.Update(orderItem);
            }

            _dbContext.SaveChanges();

            return order.OrderId;
        }

        public bool FinishPurchase(OrderModel model)
        {
            var order = _dbContext.Order.Find(model.OrderId);
            if(order == null)
            {
                throw new Exception("Request entity was not found!");
            }
            order.FirstName = model.FirstName;
            order.LastName = model.LastName;
            order.Address = model.Address;
            order.Status = "O";

            _dbContext.Update(order);
            _dbContext.SaveChanges();

            return true;
        }

        public List<OrderModel> Get()
        {
            return _dbContext.Order
                .ProjectToType<OrderModel>()
                .ToList();
        }

        public IEnumerable<OrderItemModel> GetListItemsByOrder(int orderId)
        {
            return _dbContext.OrderItem
                .Where( x => x.OrderId == orderId)
                .ProjectToType<OrderItemModel>()
                .ToList();
        }
    }
}
