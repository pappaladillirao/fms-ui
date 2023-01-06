import { HttpResponse } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes } from "@angular/router";
import { create } from "domain";
import { EMPTY, NEVER, Observable, of } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Customer, ICustomer } from "src/app/shared/model/customer.model";
import { IEmployees } from "src/app/shared/model/employyes.model";
import { EmployeesCreateComponent } from "./employees-create/employees-create.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeesViewComponent } from "./employees-view/employees-view.component";
import { EmployeesService } from "./employees.service";



@Injectable({ providedIn: 'root' })
export class EmployeesResolve implements Resolve<IEmployees> {
  constructor(private service: EmployeesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEmployees> | Observable<never> {
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

export const EmployeesRoute: Routes = [
    {
      path: '',
      component: EmployeesListComponent,
      data: {
       
        pageTitle: 'Employees',
        defaultSort: 'id,asc',
      },
     
    
    },
    {
      path: ':id/view',
      component: EmployeesViewComponent,
      // resolve: {
      //   Customer: CustomerResolve,
      // },
      
      data: {
       pageTitle: 'Employees',
        defaultSort: 'id,asc',
      },
    
    },
    {
      path: 'new',
      component: EmployeesCreateComponent,
      data: {
         pageTitle: 'Employees',
      },
    
    },

    {
    path: ':id/edit',
    component: EmployeesCreateComponent,
    resolve: {
        Employees:EmployeesResolve,
    },
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(EmployeesRoute)],
    exports: [RouterModule],
  })
  export class EmployeesRoutingModule {}