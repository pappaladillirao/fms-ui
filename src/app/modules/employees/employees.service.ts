import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {  ICustomer } from "src/app/shared/model/customer.model";
import { IEmployees } from "src/app/shared/model/employyes.model";
import { createRequestOption } from "src/app/util/request-util";
// import { createRequestOption } from "src/app/shared/util/request-util";

type EntityResponseType = HttpResponse<ICustomer>;
type EntityArrayResponseType = HttpResponse<ICustomer[]>;

@Injectable({ providedIn: "root" })
export class EmployeesService {
  
  
 
 
  
  
  

  public resourceUrl = "http://localhost:8080/api/employees";




  constructor(protected http: HttpClient) {}

  create(employee: IEmployees): Observable<EntityResponseType> {debugger;
    return this.http
      .post<IEmployees>(this.resourceUrl, employee, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  
 



  getemployeeslist():Observable<any> {
    return this.http
    .get<any>(this.resourceUrl,{observe:"response"})
    .pipe(map((res:any)=>res));
  } 

  update(customer: ICustomer): Observable<EntityResponseType> {
    return this.http
      .put<ICustomer>(this.resourceUrl, customer, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICustomer>(`${this.resourceUrl}/${id}`, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }


  getCustomerbyContact(contactNumber: any):Observable<EntityResponseType> {
    
    return this.http
      .get<ICustomer>(`${this.resourceUrl}/`+"search/"+contactNumber, {
       
        observe: "response",
      })
      .pipe(map((res: EntityResponseType) => res));


  }

 

  getEmployeebyId(id:any) {debugger;
    return this.http
    .get<IEmployees>(`${this.resourceUrl}/`+id,{
      observe:"response"
    })
    
    .pipe(map((res:EntityResponseType)=>res));
  }

  
  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICustomer[]>(this.resourceUrl, {
        params: options,
        observe: "response",
      })
      .pipe(map((res: EntityArrayResponseType) => res));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, {
      observe: "response",
    });
  }


}
