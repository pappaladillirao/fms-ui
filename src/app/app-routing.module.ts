import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

@NgModule({
 
  imports: [RouterModule.forRoot(
    [
      
      
      
      {
        path: '',
        loadChildren: () =>
          import('./modules/login/login.module').then((m) => m.LoginModule),
      },

      {
        path: 'customer',
        loadChildren: () =>
         import('./modules/customer/customer.module').then((m) => m.CustomerModule),
      },

      {
        path: 'customer-account',
        loadChildren: () =>
         import('./modules/customer-account/customer-account.module').then((m) => m.CustomerAccountModule),
      },

      {
        path: 'customer-history',
        loadChildren: () =>
         import('./modules/customer-history/customer-history.module').then((m) => m.CustomerHistoryModule),
      },



     
      
    
     
     
      
     
    ]
   
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
