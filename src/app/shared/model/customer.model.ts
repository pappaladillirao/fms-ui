import { LoginComponent } from "src/app/modules/login/login.component";



export interface ICustomer {
    id?:number;
    active?:number;
    registerNumber?:string;
    customerName?:string;
    address?:string;
    primaryContact?:string;
    secondaryContact?:string;
    customerType?:string;
    customerReview?:string;
   
    
  

}

export class Customer implements ICustomer {

    constructor(
    public id?:number,
    public active?:number,
    public registerNumber?:string,
    public customerName?:string,
    public address?:string,
    public primaryContact?:string,
    public secondaryContact?:string,
    public customerType?:string,
    public customerReview?:string,
  
    

   ) {
       
    }
}
