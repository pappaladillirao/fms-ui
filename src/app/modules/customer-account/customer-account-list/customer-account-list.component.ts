import { Component, OnInit } from '@angular/core';
import { CustomerAccountService } from '../customer-account.service';

@Component({
  selector: 'app-customer-account-list',
  templateUrl: './customer-account-list.component.html',
  styleUrls: ['./customer-account-list.component.scss']
})
export class CustomerAccountListComponent implements OnInit {
  itemsPerPage:any;
  ngbPaginationPage:any;
  totalItems:any;
  customeraccountList:any;

  constructor(private customerAccountService:CustomerAccountService) { }

  ngOnInit(): void {

    debugger;
    this.customerAccountService.getCustomeraccountList().subscribe((res:any)=>{
      this.customeraccountList=res.body

    })



  }
  delete(data:any){

  }

}
