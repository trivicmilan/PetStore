using FluentValidation;
using PetStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Validators
{
    public class ProductValidator : AbstractValidator<ProductModel>
    {
        public ProductValidator() {

            RuleFor(x => x.Name)
                .NotEmpty()
                .MaximumLength(50);

            RuleFor(x => x.Code)
                .NotEmpty()
                .MaximumLength(10);

            RuleFor(x => x.Description)
                .MaximumLength(500);

        }
    }
}
