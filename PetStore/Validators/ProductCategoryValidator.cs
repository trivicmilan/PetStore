using FluentValidation;
using PetStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetStore.Validators
{
    public class ProductCategoryValidator : AbstractValidator<ProductCategoryModel>
    {
        public ProductCategoryValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .MaximumLength(50);
        }
    }
}
