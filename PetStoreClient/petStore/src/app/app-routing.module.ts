import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './auth/service/guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  }, 
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  }, 
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule),
    canActivate: [GuardService],
    data :{permittedRoles:['Admin']}
  }, 
  {
    path: 'productCategory',
    loadChildren: () => import('./product-category/product-category.module').then(mod => mod.ProductCategoryModule),
    canActivate: [GuardService],
    data :{permittedRoles:['Admin']}
  }, 
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule),
    canActivate: [GuardService],
    data :{permittedRoles:['Admin']}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
