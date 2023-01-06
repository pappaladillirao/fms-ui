import { Component, OnInit } from '@angular/core';
import { CustomerHistoryService } from '../customer-history.service';

@Component({
  selector: 'app-customer-history-list',
  templateUrl: './customer-history-list.component.html',
  styleUrls: ['./customer-history-list.component.scss']
})
export class CustomerHistoryListComponent implements OnInit {
  customerhistoryList:any=[];

  constructor( private customerHistoryService:CustomerHistoryService) { }

  ngOnInit(): void {
  this.customerHistoryService.getCustomerhistoryList().subscribe((res:any)=>{
debugger;
  this.customerhistoryList=res.body

  })

  }
  delete(obj:any){

  }
}
