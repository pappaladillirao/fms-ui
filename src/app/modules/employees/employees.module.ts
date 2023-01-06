import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesRoutingModule } from './employees-routing.modules';



@NgModule({
  declarations: [
    EmployeesCreateComponent,
    EmployeesListComponent,
    EmployeesViewComponent
   
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    EmployeesRoutingModule,
    

    
  ]
})
export class EmployeesModule { }
