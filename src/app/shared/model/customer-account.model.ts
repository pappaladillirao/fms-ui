


export interface ICustomeraccount {
    id?:number;
    code?:string;
    name?:string;
  

}

export class Customeraccount implements ICustomeraccount {

    constructor(
    public id?:number,
      public name?:string,
   ) {
       
    }
}
