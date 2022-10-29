import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AccountService } from './core/auth/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flag: boolean = false;
  // defaultMenu: any = '';
  slideMenuHide: boolean = true;
  public isCollapsed = true;
  title = 'fms-web';
  login=false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private accountService: AccountService,
    private localStoargeService :LocalStorageService
   
  ) { 

    const params = window.location.pathname;
    let param=params.split("=");
   
    // if(param[1]=="1111"){
     
    //  }
    //  else{
    //   this.document.location.href = 'http://iplexr.com/';
    // }
  
  }
  hideMenu() {
    this.slideMenuHide = !this.slideMenuHide;
  }

  isAuthenticated(){
    return this.accountService.isAuthenticated();
  }

  logout(){
    this.localStoargeService.clear();
    localStorage.clear();
  }
  
}
