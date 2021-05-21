using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Helpers
{
    public class ErrorMessage
    {
        public string Code { get; set; }
        public string Message { get; set; }

        public ErrorMessage(string code, string message)
        {
            Code = code;
            Message = message;
        }

        public ErrorMessage(string message) : this(null, message) { }

        public override string ToString()
        {
            return $"CODE: {Code}; MESSAGE: {Message}";
        }
    }
}
