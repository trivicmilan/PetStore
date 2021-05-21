import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from '../form-container/form-container.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';

const routes: Routes = [
  {
    path: '',
    component: FormContainerComponent,
    children: [
      {
        path: '',
        component: ProductCategoryListComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryRoutingModule { }
