


export interface ICustomer {
    id?:number;
    code?:string;
    name?:string;
  

}

export class Customer implements ICustomer {

    constructor(
    public id?:number,
      public name?:string,
   ) {
       
    }
}
