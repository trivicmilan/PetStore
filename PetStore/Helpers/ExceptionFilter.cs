using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Helpers
{
    public class ExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
		{
			var errorMessage = new ErrorMessage(context.Exception.Message);

			Log.Logger.Error(context.Exception, errorMessage.Message);

			context.Result = new BadRequestObjectResult(errorMessage);
			return;
		}
    }
}
