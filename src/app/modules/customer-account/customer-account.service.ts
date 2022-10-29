import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ICustomeraccount } from "src/app/shared/model/customer-account.model";
import { createRequestOption } from "src/app/util/request-util";


type EntityResponseType = HttpResponse<ICustomeraccount>;
type EntityArrayResponseType = HttpResponse<ICustomeraccount[]>;

@Injectable({ providedIn: "root" })
export class CustomeraccountService {
  public resourceUrl = "api/dms/customeraccount";

  public pbResourceUrl = 'api/forecast/pb/service';

  constructor(protected http: HttpClient) {}

  create(customeraccount: ICustomeraccount): Observable<EntityResponseType> {
    return this.http
      .post<ICustomeraccount>(this.resourceUrl, customeraccount, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  update(customeraccount: ICustomeraccount): Observable<EntityResponseType> {
    return this.http
      .put<ICustomeraccount>(this.resourceUrl, customeraccount, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICustomeraccount>(`${this.resourceUrl}/${id}`, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICustomeraccount[]>(this.resourceUrl, {
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

  getAllCustomeraccount(): Observable<EntityArrayResponseType> {
      return this.http
        .get<ICustomeraccount[]>(this.resourceUrl+'/product', {  observe: 'response' })
        .pipe(map((res: EntityArrayResponseType) => res));

    }
    getCustomeraccountList() : Observable<any> {
      return this.http
        .post<any>(this.resourceUrl + '/list', {
          observe: 'response',
        })
        .pipe(map((res: any) => res));
      }
    getAllCustomeraccountList() : Observable<any> {
    return this.http
      .post<any>(this.pbResourceUrl + '/customeraccount', {
        observe: 'response',
      })
      .pipe(map((res: any) => res));
    }
}
