import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomeraccountRoutingModule } from './customer-account-routing.module';
import { CustomerAccountListComponent } from './customer-account-list/customer-account-list.component';
import { CustomerAccountViewComponent } from './customer-account-view/customer-account-view.component';
import { CustomerAccountCreateComponent } from './customer-account-create/customer-account-create.component';



@NgModule({
  declarations: [
    CustomerAccountListComponent,
    CustomerAccountViewComponent,
    CustomerAccountCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomeraccountRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class CustomerAccountModule { }
