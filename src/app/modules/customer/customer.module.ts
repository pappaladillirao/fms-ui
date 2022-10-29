import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerViewComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    NgbModule,
  ]
})
export class CustomerModule { }
