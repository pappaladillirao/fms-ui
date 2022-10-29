import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ICustomerHistory } from "src/app/shared/model/customer-history.model";
import { createRequestOption } from "src/app/util/request-util";
// import { createRequestOption } from "src/app/shared/util/request-util";

type EntityResponseType = HttpResponse<ICustomerHistory>;
type EntityArrayResponseType = HttpResponse<ICustomerHistory[]>;

@Injectable({ providedIn: "root" })
export class CustomerhistoryService {
  public resourceUrl = "api/dms/customerhistory";

  public pbResourceUrl = 'api/forecast/pb/service';

  constructor(protected http: HttpClient) {}

  create(customerhistory: ICustomerHistory): Observable<EntityResponseType> {
    return this.http
      .post<ICustomerHistory>(this.resourceUrl, customerhistory, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  update(customerhistory: ICustomerHistory): Observable<EntityResponseType> {
    return this.http
      .put<ICustomerHistory>(this.resourceUrl, customerhistory, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICustomerHistory>(`${this.resourceUrl}/${id}`, { observe: "response" })
      .pipe(map((res: EntityResponseType) => res));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICustomerHistory[]>(this.resourceUrl, {
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

  getAllCustomerhistory(): Observable<EntityArrayResponseType> {
      return this.http
        .get<ICustomerHistory[]>(this.resourceUrl+'/product', {  observe: 'response' })
        .pipe(map((res: EntityArrayResponseType) => res));

    }
    getCustomerhistoryList() : Observable<any> {
      return this.http
        .post<any>(this.resourceUrl + '/list', {
          observe: 'response',
        })
        .pipe(map((res: any) => res));
      }
    getAllCustomerhistoryList() : Observable<any> {
    return this.http
      .post<any>(this.pbResourceUrl + '/customerhistory', {
        observe: 'response',
      })
      .pipe(map((res: any) => res));
    }
}
