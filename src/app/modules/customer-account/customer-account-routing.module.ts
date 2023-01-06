import { HttpResponse } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from "@angular/router";

import { EMPTY, NEVER, Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Customeraccount, ICustomeraccount } from "src/app/shared/model/customer-account.model";
import { CustomerAccountCreateComponent } from "./customer-account-create/customer-account-create.component";
import { CustomerAccountListComponent } from "./customer-account-list/customer-account-list.component";
import { CustomerAccountViewComponent } from "./customer-account-view/customer-account-view.component";
import { CustomerAccountService } from "./customer-account.service";



@Injectable({ providedIn: 'root' })
export class CustomeraccountResolve implements Resolve<ICustomeraccount> {
  constructor(private service: CustomerAccountService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICustomeraccount> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((company: HttpResponse<ICustomeraccount>) => {
          if (company.body) {
            return of(company.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Customeraccount());
  }
}

export const CustomeraccountRoute: Routes = [
    {
      path: '',
      component: CustomerAccountListComponent,
      data: {
       
        pageTitle: 'Customeraccount',
        defaultSort: 'id,asc',
      },
     
    
    },
    {
      path: ':customerId/view',
      component: CustomerAccountViewComponent,
      // resolve: {
      //   Customer: CustomeraccountResolve,
      // },
      
      data: {
       pageTitle: 'Customeraccount',
        defaultSort: 'id,asc',
      },
    
    },
    {
      path: 'new',
      component: CustomerAccountCreateComponent,
      data: {
         pageTitle: 'Customeraccount',
      },
    
    },

    {
    path: ':id/edit',
    component: CustomerAccountCreateComponent,
    resolve: {
        Customer:CustomeraccountResolve,
    },
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(CustomeraccountRoute)],
    exports: [RouterModule],
  })
  export class CustomeraccountRoutingModule {}