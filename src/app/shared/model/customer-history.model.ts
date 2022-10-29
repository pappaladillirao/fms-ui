


export interface ICustomerHistory {
    id?:number;
    code?:string;
    name?:string;
  

}

export class Customerhistory implements ICustomerHistory {

    constructor(
    public id?:number,
      public name?:string,
   ) {
       
    }
}
