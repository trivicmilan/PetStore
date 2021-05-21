using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PetStore.Helpers;
using PetStore.Models;
using PetStore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductService _service;

        public ProductController(IProductService productService)
        {
            _service = productService;
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(201)]
        [ProducesResponseType(typeof(ErrorMessage), 400)]
        public IActionResult Post([FromBody] ProductModel model)
        {
            var id = _service.Add(model);
            return Created($"/api/Product/{id}", id);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(ErrorMessage), 400)]
        public IActionResult Put(int id, [FromBody] ProductModel model)
        {
            _service.Edit(model);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(ErrorMessage), 400)]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return NoContent();
        }

        [HttpGet]
        public IEnumerable<ProductModel> Get()
        {
            return _service.Get();
        }

        [HttpGet("{page}/{pageSize}/{productCategoryId}/{searchName}")]
        public IEnumerable<ProductModel> Get(int page, int pageSize, int productCategoryId, string searchName)
        {
            return _service.Get(page, pageSize, productCategoryId, searchName);
        }

        [HttpGet("{page}/{pageSize}/{productCategoryId}")]
        public IEnumerable<ProductModel> Get(int page, int pageSize, int productCategoryId)
        {
            return _service.Get(page, pageSize, productCategoryId);
        }

        [HttpGet("{page}/{pageSize}")]
        public IEnumerable<ProductModel> Get(int page, int pageSize)
        {
            return _service.Get(page, pageSize);
        }

        [HttpGet("{id}")]
        public ProductModel Get(int id)
        {
            return _service.Get(id);
        }

    }
}
