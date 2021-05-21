using PetStore.Data;
using PetStore.Models;
using PetStore.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace PetStoreTest
{
    public class ProductCategoryServiceTest : TestBase
    {
		private readonly ProductCategoryService _service;
		private readonly PetStoreDbContext _dbContext;

		public ProductCategoryServiceTest() : base()
		{
			_dbContext = GetDbContext();
			_service = new ProductCategoryService(_dbContext);
		}

		[Fact, Trait("Command", "Add")]
		public void Add()
		{
			var testName = "TestName";
			var model = new ProductCategoryModel()
			{
				Name = testName
			};

			var id = _service.Add(model);

			Assert.NotNull(_service.Get(id));
		}

		[Theory, Trait("Command", "Edit")]
		[InlineData("TestName2")]
		[InlineData("TestName3")]
		public void Edit(string testNameEdit)
		{
			var testName = "TestName";
			var model = new ProductCategoryModel()
			{
				Name = testName
			};
			var id = _service.Add(model);

			var editModel = _service.Get(id);
			editModel.Name = testNameEdit;

			_service.Edit(editModel);

			Assert.Equal(testNameEdit, _service.Get(editModel.ProductCategoryId).Name);
		}


		[Fact, Trait("Command", "Delete")]
		public void Delete()
		{
			var testName = "TestName";
			var model = new ProductCategoryModel()
			{
				Name = testName
			};
			var id = _service.Add(model);

			_service.Delete(id);

			Assert.Null(_service.Get(id));
		}

	}
}
