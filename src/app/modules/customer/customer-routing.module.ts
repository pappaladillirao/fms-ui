import { HttpResponse } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from "@angular/router";
import { create } from "domain";
import { EMPTY, NEVER, Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Customer, ICustomer } from "src/app/shared/model/customer.model";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerViewComponent } from "./customer-view/customer-view.component";
import { CustomerService } from "./customer.service";


@Injectable({ providedIn: 'root' })
export class CustomerResolve implements Resolve<ICustomer> {
  constructor(private service: CustomerService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICustomer> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((company: HttpResponse<ICustomer>) => {
          if (company.body) {
            return of(company.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Customer());
  }
}

export const CustomerRoute: Routes = [
    {
      path: '',
      component: CustomerListComponent,
      data: {
       
        pageTitle: 'Customer',
        defaultSort: 'id,asc',
      },
     
    
    },
    {
      path: ':id/view',
      component: CustomerViewComponent,
      // resolve: {
      //   Customer: CustomerResolve,
      // },
      
      data: {
       pageTitle: 'Customer',
        defaultSort: 'id,asc',
      },
    
    },
    {
      path: 'new',
      component: CustomerCreateComponent,
      data: {
         pageTitle: 'Customer',
      },
    
    },

    {
    path: ':id/edit',
    component: CustomerCreateComponent,
    resolve: {
        Customer:CustomerResolve,
    },
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(CustomerRoute)],
    exports: [RouterModule],
  })
  export class CustomerRoutingModule {}