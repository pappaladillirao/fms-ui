import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { start } from '@popperjs/core';
import * as moment from 'moment';
import { format } from 'path';
import { DATE_TIME_FORMAT } from 'src/app/shared/constants/input.constants';
import { Customerhistory } from 'src/app/shared/model/customer-history.model';
import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { CustomerService } from '../../customer/customer.service';
import { CustomerHistoryService } from '../customer-history.service';

@Component({
  selector: 'app-customer-history-create',
  templateUrl: './customer-history-create.component.html',
  styleUrls: ['./customer-history-create.component.scss']
})
export class CustomerHistoryCreateComponent implements OnInit {
  customerExit=false;
  contactNumber:any=[];
  accountNumber:any;
  customerData:any;
  customerAccountData:any;
 
  

 




  editForm=this.fb.group({
    id:[""],
    customerId:[""],
    transactionAmount:[""],
    collectedBy:[""],
    reason:[""],
    date:[formatDate(new Date(),'yyyy-MM-dd','en')],

  })

  customerForm=this.fb.group({
    id:({value:'',disabled:true}),
    customerName:({value:'',disabled:true}),
    customerType:({value:'',disabled:true}),
    customerReview:({value:'',disabled:true}),
    registerNumber:({value:'',disabled:true}),
    primaryContact:({value:'',disabled:true}),
    secondaryContact:({value:'',disabled:true}),
    address:({value:'',disabled:true}),


  })
 


  constructor(private fb:FormBuilder, private customerHistoryService:CustomerHistoryService, private customerService:CustomerService, private customerAccountService:CustomerAccountService,private router:Router) { }

  ngOnInit(): void {
    // this.editForm.controls.customerId.setValue('1');


  }
  save(){debugger;
    //let customerId=this.editForm.get('customerId')?.value;
   const customerhistory=this.createCustomerHistoryForm();
    
    this.customerHistoryService.create(customerhistory).subscribe((res:any)=>{
     const data=res.body;
      alert("data Updated")
    this.editForm.patchValue({
      id:'',
      customerId:'',
     
      transactionAmount:'',
      collectedBy:'',
      reason:'',
      date:null,
    })
  
    this.router.navigate(["/customerhistory"])
 
 })
  
}  createCustomerHistoryForm() {
  const customerhistory=new Customerhistory();
    customerhistory.customerAccountId=this.customerAccountData.id;
    customerhistory.customerId=this.customerAccountData.customerId;
    customerhistory.transactionAmount=Number(this.editForm.get('transactionAmount')?.value);
    customerhistory.collectedBy=this.editForm.get('collectedBy')?.value||"";
    customerhistory.reason=this.editForm.get('reason')?.value||"";
    customerhistory.date=this.editForm.get('date')?.value?moment(this.editForm.get('date')?.value,DATE_TIME_FORMAT): undefined;

    return customerhistory;


  }

  searchCustomerByContact(){debugger;
    this.customerService.getCustomerbyContact(this.contactNumber).subscribe((res:any)=>{
      const customerData=res.body;
      if(customerData==null ||customerData==undefined){
        this.customerExit=false;
        alert("There is no Customer Account with this contact");
        }
        else{
            this.customerAccountService.getCustomerAccountbyCustomerId(customerData.id).subscribe((res:any)=>{
              this.customerAccountData=res.body;
              if(this.customerAccountData==null ||this.customerAccountData==undefined){
                this.customerExit=false;
          
              }
              else{
                this.accountNumber=this.customerAccountData.accountNumber;
                this.customerExit=true;
              }
            })

             
              }


  })




  }



}
