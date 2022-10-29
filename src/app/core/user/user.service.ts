import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from 'src/app/app-constants';
import {
  createRequestOption,
  Pagination,
} from 'src/app/shared/util/request-util';
import { IUser } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  // public resourceUrl = SERVER_API_URL + 'api/users';
  public resourceUrl = 'api/forecast/users';

  constructor(private http: HttpClient) {}

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.resourceUrl, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(this.resourceUrl, user);
  }

  // resetPassword(user: any) {
  //   return this.http.put<any>(this.resourceUrl + '/resetpassword', user);
  // }

  resetPassword(user: any): Observable<any> {
    return this.http
      .post<any>(this.resourceUrl + '/resetpassword', user, {
        observe: 'response',
      })
      .pipe((res: any) => res);
  }

  find(login: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.resourceUrl}/${login}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IUser[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUser[]>(this.resourceUrl, {
      params: options,
      observe: 'response',
    });
  }

  delete(login: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${login}`);
  }

  authorities(): Observable<string[]> {
    return this.http.get<string[]>(SERVER_API_URL + 'api/users/authorities');
  }
}
