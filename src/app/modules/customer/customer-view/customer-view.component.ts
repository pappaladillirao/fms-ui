import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/model/customer.model';
import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customerview:any
  id: any;
 

  constructor(private fb:FormBuilder, private customerService:CustomerService, private route: ActivatedRoute) { }

  
  editForm = this.fb.group({
    id:({value:'',disabled:true}),
    customerName:({value:'',disabled:true}),
    customerType:({value:'',disabled:true}),
    customerReview:({value:'',disabled:true}),
    registerNumber:({value:'',disabled:true}),
    address:({value:'',disabled:true}),
    primaryContact:({value:'',disabled:true}),
    secondaryContact:({value:'',disabled:true}),
    active:({value:'',disabled:true}),
   });

  ngOnInit(): void { debugger;
    // const customer=this.customerFromForm();
    this.id = this.route.snapshot.paramMap.get('id');
   this.customerService.getCustomerbyId(Number(this.id)).subscribe((res:any)=>{

    this.customerview=res.body;

    this.editForm.patchValue({
      id:this.customerview.id,
      customerName:this.customerview.customerName,
      customerType:this.customerview.customerType,
      customerReview:this.customerview.customerReview,
      registerNumber:this.customerview.registerNumber,
      address:this.customerview.address,
      primaryContact:this.customerview.primaryContact,
      secondaryContact:this.customerview.secondaryContact,

    })
   })

}
  
}


