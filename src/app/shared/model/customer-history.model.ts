import * as moment from 'moment'
import { Moment } from 'moment';

export interface ICustomerHistory {
    id?:number;
    customerId?:number;
    customerAccountId?:number;
    transactionAmount?:number;
    collectedBy?:string;
    reason?:string;
    date?:Moment;
  

}

export class Customerhistory implements ICustomerHistory {

    constructor(
    public id?:number,
    public customerId?:number,
    public customerAccountId?:number,
    public transactionAmount?:number,
    public collectedBy?:string,
    public reason?:string,
    public date?:Moment,
   ) {
       
    }
}
