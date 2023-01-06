import { CDK_DRAG_CONFIG } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyARecord } from 'dns';
import { Customer } from 'src/app/shared/model/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  id: any;
  customerview: any;

  editForm = this.fb.group({
    id:[],
    customerName:[""],
    customerType:[""],
    customerReview:[""],
    registerNumber:[""],
    address:[""],
    primaryContact:[""],
    secondaryContact:[""],
    active:[""],
    column1:[""],
    column2:[""],
    result:[null],
    
  });
  





  constructor(private fb:FormBuilder,private customerService:CustomerService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

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
save(){debugger;
const customer=this.createCustomerFromForm();

this.customerService.create(customer).subscribe((res:any)=>{
  const data=res.body;

     this.editForm.patchValue({
      customerName:'',
      customerType:'',
      customerReview:'',
      registerNumber:'',
      address:'',
      primaryContact:'',
      secondaryContact:'',
      active:'',
      
      })

      

      this.router.navigate(["/customeraccount/new"]);

      
})

  
}

createCustomerFromForm(){debugger;

  const customer=new Customer();
  customer.id=Number(this.editForm.get('id')?.value);
  customer.customerName=this.editForm.get('customerName')?.value||"";
  customer.customerType=this.editForm.get('customerType')?.value||"";
  customer.customerReview=this.editForm.get('customerReview')?.value||"";
  customer.registerNumber=this.editForm.get('registerNumber')?.value||"";
  customer.address=this.editForm.get('address')?.value||"";
  customer.primaryContact=this.editForm.get('primaryContact')?.value||"";
  customer.secondaryContact=this.editForm.get('secondaryContact')?.value||"";
  customer.active=Number(this.editForm.get('active')?.value);


  
  

  return customer;

}
 
}

