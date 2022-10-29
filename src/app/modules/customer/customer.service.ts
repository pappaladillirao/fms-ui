import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {  ICustomer } from "src/app/shared/model/customer.model";
import { createRequestOption } from "src/app/util/request-util";
// import { createRequestOption } from "src/app/shared/util/request-util";

type EntityResponseType = HttpResponse<ICustomer>;
type EntityArrayResponseType = HttpResponse<ICustomer[]>;

@Injectable({ providedIn: "root" })
export class CustomerService {
  public resourceUrl = "api/dms/customer";

  public pbResourceUrl = 'api/forecast/pb/service';

  constructor(protected http: HttpClient) {}

  create(customer: ICustomer): Observable<EntityResponseType> {
    return this.http
      .post<ICustomer>(this.resourceUrl, customer, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
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

  uploadFiles(selectedFiles: FormData): Observable<EntityResponseType> {
    // const copy = this.convertDateFromClient(selectedFiles);

    return this.http
      .post(`${this.resourceUrl}/data/import`, selectedFiles, {
        observe: "response",
      })
      .pipe(map((res: EntityResponseType) => res));
  }

  getAllCustomer(): Observable<EntityArrayResponseType> {
      return this.http
        .get<ICustomer[]>(this.resourceUrl+'/product', {  observe: 'response' })
        .pipe(map((res: EntityArrayResponseType) => res));

    }
    getCustomerList() : Observable<any> {
      return this.http
        .post<any>(this.resourceUrl + '/list', {
          observe: 'response',
        })
        .pipe(map((res: any) => res));
      }
    getAllCustomerList() : Observable<any> {
    return this.http
      .post<any>(this.pbResourceUrl + '/customer', {
        observe: 'response',
      })
      .pipe(map((res: any) => res));
    }
}
