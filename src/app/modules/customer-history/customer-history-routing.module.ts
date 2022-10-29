import { HttpResponse } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from "@angular/router";
import { EMPTY, NEVER, Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Customerhistory, ICustomerHistory } from "src/app/shared/model/customer-history.model";
import { CustomerHistoryCreateComponent } from "./customer-history-create/customer-history-create.component";
import { CustomerHistoryListComponent } from "./customer-history-list/customer-history-list.component";
import { CustomerHistoryViewComponent } from "./customer-history-view/customer-history-view.component";
import { CustomerhistoryService } from "./customer-history.service";



@Injectable({ providedIn: 'root' })
export class CustomerhistoryResolve implements Resolve<ICustomerHistory> {
  constructor(private service: CustomerhistoryService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICustomerHistory> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((company: HttpResponse<ICustomerHistory>) => {
          if (company.body) {
            return of(company.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Customerhistory());
  }
}

export const CustomerhistoryRoute: Routes = [
    {
      path: '',
      component: CustomerHistoryListComponent,
      data: {
       
        pageTitle: 'Customerhistory',
        defaultSort: 'id,asc',
      },
     
    
    },
    {
      path: ':id/view',
      component: CustomerHistoryViewComponent,
      // resolve: {
      //   Customer: CustomerhistoryResolve,
      // },
      
      data: {
       pageTitle: 'Customerhistory',
        defaultSort: 'id,asc',
      },
    
    },
    {
      path: 'new',
      component: CustomerHistoryCreateComponent,
      data: {
         pageTitle: 'Customerhistory',
      },
    
    },

    {
    path: ':id/edit',
    component: CustomerHistoryCreateComponent,
    resolve: {
        Customer:CustomerhistoryResolve,
    },
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(CustomerhistoryRoute)],
    exports: [RouterModule],
  })
  export class CustomerHistoryRoutingModule {}