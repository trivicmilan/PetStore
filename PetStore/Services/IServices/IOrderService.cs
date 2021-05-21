using PetStore.Models;
using System.Collections.Generic;

namespace PetStore.Services
{
    public interface IOrderService
    {
        int AddOrderItem(OrderItemModel item);
        List<OrderModel> Get();
        IEnumerable<OrderItemModel> GetListItemsByOrder(int orderId);
        bool FinishPurchase(OrderModel model);
    }
}