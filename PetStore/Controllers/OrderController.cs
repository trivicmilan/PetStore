using Microsoft.AspNetCore.Mvc;
using PetStore.Helpers;
using PetStore.Models;
using PetStore.Services;
using System;
using System.Collections.Generic;

namespace PetStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderService _service;

        public OrderController(IOrderService orderService)
        {
            _service = orderService;
        }

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(typeof(ErrorMessage), 400)]
        public IActionResult AddOrderItem([FromBody] OrderItemModel model)
        {
            var id = _service.AddOrderItem(model);
            return Created($"/api/Order/{id}", id);
        }

        [HttpPut("finishPurchase")]
        [ProducesResponseType(200)]
        [ProducesResponseType(typeof(ErrorMessage), 400)]
        public IActionResult FinishPurchase([FromBody] OrderModel model)
        {
            _service.FinishPurchase(model);
            return Ok();
        }

        [HttpGet]
        public IEnumerable<OrderModel> Get()
        {
            return _service.Get();
        }

        [HttpGet("items/{id}")]
        public IEnumerable<OrderItemModel> GetListItemsByOrder(int id)
        {
            return _service.GetListItemsByOrder(id);
        }

    }
}
