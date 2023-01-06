import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerHistoryListComponent } from './customer-history-list/customer-history-list.component';
import { CustomerHistoryViewComponent } from './customer-history-view/customer-history-view.component';
import { CustomerHistoryCreateComponent } from './customer-history-create/customer-history-create.component';
import { CustomerHistoryRoutingModule } from './customer-history-routing.module';




@NgModule({
  declarations: [
    CustomerHistoryListComponent,
    CustomerHistoryViewComponent,
    CustomerHistoryCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerHistoryRoutingModule,
    NgbModule,
    FormsModule,
  ]
})
export class CustomerHistoryModule { }
