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
    public class ProductCategoryController : ControllerBase
    {
        private IProductCategoryService _service;

        public ProductCategoryController(IProductCategoryService productCategoryService)
        {
            _service = productCategoryService;
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(201)]
        [ProducesResponseType(typeof(ErrorMessage),400)]
        public IActionResult Post([FromBody] ProductCategoryModel model)
        {
            var id = _service.Add(model);
            return Created($"/api/ProductCategory/{id}", id);
        }
        
        [HttpPut]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(204)]
        [ProducesResponseType(typeof(ErrorMessage), 400)]
        public IActionResult Put([FromBody] ProductCategoryModel model)
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
        [Authorize(Roles = "Admin")]
        public IEnumerable<ProductCategoryModel> Get()
        {
            return _service.Get();
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public ProductCategoryModel Get(int id)
        {
            return _service.Get(id);
        }
    }
}
