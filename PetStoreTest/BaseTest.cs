using Microsoft.EntityFrameworkCore;
using PetStore.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace PetStoreTest
{
	public abstract class TestBase
	{
		public PetStoreDbContext GetDbContext()
		{
			DbContextOptionsBuilder builder = new DbContextOptionsBuilder();
			builder.UseSqlite("DataSource=:memory:", x => { });

			var dbContext = new PetStoreDbContext(builder.Options);
			dbContext.Database.OpenConnection();
			dbContext.Database.EnsureCreated();

			return dbContext;
		}
	}
}
