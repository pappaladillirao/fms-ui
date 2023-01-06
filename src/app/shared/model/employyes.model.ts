import { Moment } from "moment";
import { LoginComponent } from "src/app/modules/login/login.component";



export interface IEmployees {
    id?:number;
    employeeName?:string;
    address?:string;
    joiningDate?:Moment;
    primaryContact?:string;
    secondaryContact?:string;
    employeeSalaryType?:string;

   
    
  

}

export class Employees implements IEmployees {

    constructor(
    public id?:number,
    public employeeName?:string,
    public address?:string,
    public joiningDate?:Moment,
    public primaryContact?:string,
    public secondaryContact?:string,
    public employeeSalaryType?:string,
    
  
    

   ) {
       
    }
}
