using FluentValidation;
using PetStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Validators
{
    public class OrderValidator : AbstractValidator<OrderModel>
    {
        public OrderValidator()
        {
            RuleFor(x => x.FirstName)
                .MaximumLength(50);
            
            RuleFor(x => x.LastName)
                .MaximumLength(50);
            
            RuleFor(x => x.Address)
                .MaximumLength(50);

            RuleFor(x => x.Status)
                .MaximumLength(1);
        }
    }
}
