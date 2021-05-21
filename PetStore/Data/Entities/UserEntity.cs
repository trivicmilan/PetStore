using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Data.Entities
{
    public class UserEntity : IdentityUser
	{
		[MaxLength(150)]
		public string FirstName { get; set; }
		[MaxLength(150)]
		public string LastName { get; set; }
	}
}
