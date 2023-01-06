import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  itemsPerPage:any;
  ngbPaginationPage:any;
  totalItems:any;
  customerList:any;

  constructor(private customerService:CustomerService) { }

  



  ngOnInit(): void {
    // let obj={};
    // obj={id:1,customerName:"Dilli",customerType:"Loan",registerNumber:"123456",address:"ipm",primaryContact:"999",secondaryContact:"888"};
    // this.customerList.push(obj);
    // obj={id:2,customerName:"Chanti",customerType:"Loan",registerNumber:"8888",address:"hyd",primaryContact:"944499",secondaryContact:"85154688"}
    // this.customerList.push(obj);
    
debugger;
    this.customerService.getcustomerlist().subscribe((res:any)=>{
     
      this.customerList=res.body;
     
    });






  }
  loadPage(event:any){
   

  }
  delete(data:any){

  }

  
}
