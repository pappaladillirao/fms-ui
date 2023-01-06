


export interface ICustomeraccount {
    id?:number;
    customerId?:number;
   
    accountNumber?:String;
    balanceAmount?:number;
    expectedDuration?:number;
    collectedDuration?:number;
    givenAmount?:number;
    totalCollectedAmount?:number;
    expectedAmount?:number;
    interestAmount?:number;
    interestRate?:number;
}

export class Customeraccount implements ICustomeraccount {

    constructor(
      public id?:number,
      public customerId?:number,
      
      public accountNumber?:String,
      public balanceAmount?:number,
      public expectedDuration?:number,
      public collectedDuration?:number,
      public givenAmount?:number,
      public totalCollectedAmount?:number,
      public expectedAmount?:number, 
      public interestAmount?:number,
      public interestRate?:number,

   ) {
       
    }
}
