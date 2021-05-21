using FluentValidation;
using PetStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Validators
{
    public class OrderItemValidator : AbstractValidator<OrderItemModel>
    {
        public OrderItemValidator()
        {
            RuleFor(x => x.ProductId)
                .NotEmpty();
        }
    }
}
