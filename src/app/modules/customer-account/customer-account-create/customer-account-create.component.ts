import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Customeraccount } from 'src/app/shared/model/customer-account.model';
import { CustomerService } from '../../customer/customer.service';
import { CustomerAccountService } from '../customer-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-account-create',
  templateUrl: './customer-account-create.component.html',
  styleUrls: ['./customer-account-create.component.scss']
})
export class CustomerAccountCreateComponent implements OnInit {
  customeraccountList:any = [];
  customeraccount:any =[];
  registerNumber:any = [];
  customerExist=false;
  contactNumber:any=[];

  editForm = this.fb.group({
    id:[''],
    customerId:[''],
  //  registerNumber:[""],
    accountNumber:[""],
    balanceAmount:[""],
    expectedDuration:[""],
    interestRate:[""],
    collectedDuration:[""],
    givenAmount:[""],
    totalCollectedAmount:[""],
    expectedAmount:[""],
    interestAmount:[""],


  })

  customerForm = this.fb.group({
    id:({value:'',disabled:true}),
    customerName:({value:'',disabled:true}),
    customerType:({value:'',disabled:true}),
    customerReview:({value:'',disabled:true}),
    registerNumber:({value:'',disabled:true}),
    primaryContact:({value:'',disabled:true}),
    secondaryContact:({value:'',disabled:true}),
    address:({value:'',disabled:true}),


    

  })
  

  constructor(private fb:FormBuilder,private customerAccountService:CustomerAccountService,private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    // this.editForm.controls.balanceAmount.setValue('100');
    // this.editForm.patchValue({
    //   balanceAmount:'100',
    //   expectedDuration:'5',
    //   interestRate:'100',
    //   collectedDuration:'',
    //   givenAmount:'500',
    //   totalCollectedAmount:'',
    //   expectedAmount:'600',
    //   intrestAmount:'100',


    //})


  }

  save(){debugger;
    //let balanceAmount=this.editForm.get('balanceAmount')?.value;
    const customerAccount=this.createcustomerAccountForm();

    this.customerAccountService.create(customerAccount).subscribe((res:any)=>{
      const data=res.body;
     alert ("data updated")

    this.editForm.patchValue({
        id:'',
        customerId:'',
      //  registerNumber:null,
        accountNumber:'',
        balanceAmount:'',
        expectedDuration:'',
        interestRate:'',
        collectedDuration:'',
        givenAmount:'',
        totalCollectedAmount:'',
        expectedAmount:'',
        interestAmount:'',

    })
      this.router.navigate(["/customeraccount"])
    })
  }

  createcustomerAccountForm() {
    const customerAccount=new Customeraccount();
    customerAccount.customerId=Number(this.customerForm.get('id')?.value);
    //customerAccount.registerNumber=this.editForm.get('registerNumber')?.value||"";
    customerAccount.accountNumber=this.editForm.get('accountNumber')?.value ||"";
    customerAccount.balanceAmount=Number(this.editForm.get('balanceAmount')?.value);
    customerAccount.expectedDuration=Number(this.editForm.get('expectedDuration')?.value);
    customerAccount.interestRate=Number(this.editForm.get('interestRate')?.value);
    customerAccount.collectedDuration=Number(this.editForm.get('collectedDuration')?.value);
    customerAccount.givenAmount=Number(this.editForm.get('givenAmount')?.value);
    customerAccount.totalCollectedAmount=Number(this.editForm.get('totalCollectedAmount')?.value);
    customerAccount.expectedAmount=Number(this.editForm.get('expectedAmount')?.value);
    customerAccount.interestAmount=Number(this.editForm.get('interestAmount')?.value);

    return customerAccount;

  }
  

  searchCustomerByContact(){debugger;
    this.customerService.getCustomerbyContact(this.contactNumber).subscribe((res:any)=>{
      const customerData=res.body;
      if(customerData==null ||customerData==undefined){
        this.customerExist=false;
        alert("No data available with this Contact Number.If the Customer was New please add the Customer through this link")
          }
          else{
            this.customerExist=true;

              this.customerForm.patchValue({
              id:customerData.id,
              customerName:customerData.customerName,
              customerType:customerData.customerType,
              customerReview:customerData.customerReview,
              registerNumber:customerData.registerNumber,
              primaryContact:customerData.primaryContact,
              secondaryContact:customerData.secondaryContact,
              address:customerData.address,

          })
    }


  })




  }

  

}
