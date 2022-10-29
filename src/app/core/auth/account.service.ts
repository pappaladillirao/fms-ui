import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { SessionStorageService } from "ngx-webstorage";
import { Observable, of, ReplaySubject } from "rxjs";
import { catchError, shareReplay, tap } from "rxjs/operators";
import { SERVER_API_URL } from "src/app/app-constants";

import { Account } from "../user/account.model";
import { StateStorageService } from "./state-storage.service";

@Injectable({ providedIn: "root" })
export class AccountService {
  private userIdentity: Account | null = null;
  private authenticationState = new ReplaySubject<Account | null>(1);
  private accountCache$?: Observable<Account | null>;

  public resourceUrl = "api/forecast";
  public logininfo: any;

  constructor(
    private sessionStorage: SessionStorageService,
    private http: HttpClient,
    private stateStorageService: StateStorageService,
    private router: Router,
   
    private cookies : CookieService,
  ) {}

  save(account: Account): Observable<{}> {
    return this.http.post(SERVER_API_URL + "api/account", account);
  }

  authenticate(identity: Account | null): void {debugger;
    localStorage.setItem("loginUserInfo", JSON.stringify(identity));
    let user: any = localStorage.getItem("loginUserInfo");
    user = JSON.parse(user);
    let id = user.id;
    this.cookies.set('userId' , id);
  
    // this.menuManagementService
    //   .getMenusByRoleId(user.roles)
    //   .subscribe((res: HttpResponse<any[]>) => {
    //     localStorage.setItem("menuIds", JSON.stringify(res.body));
    //   });
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    if (!this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    return this.userIdentity.authorities.some((authority: string) =>
      authorities.includes(authority)
    );
  }

  identity(force?: boolean): Observable<Account | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => {
          return of(null);
        }),
        tap((account: Account | null) => {
          this.authenticate(account);

          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting
          if (account && account.langKey) {
            const langKey =
              this.sessionStorage.retrieve("locale") || account.langKey;
          }

          if (account) {
            this.navigateToStoredUrl();
          }
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    this.logininfo = localStorage.getItem("loginUserInfo");
    // return this.userIdentity !== null;
    return this.logininfo !== null;
  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): string {
    return this.userIdentity ? this.userIdentity.imageUrl : "";
  }

  private fetch(): Observable<Account> {
    return this.http.get<Account>(this.resourceUrl + "/account");
  }

  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl);
    }
  }
}
