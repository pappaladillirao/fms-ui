/* eslint-disable @typescript-eslint/tslint/config */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';


@Component({
  selector: 'jhi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('username', { static: false })
  username?: ElementRef;

  authenticationError = false;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false],
  });


  authSubscription?: Subscription;

  constructor(
  
    private router: Router,
    private fb: FormBuilder,
   
  ) {
   
  }
  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
   
  }

  isAuthenticated(): boolean {
  return true;
  }

  login(): boolean {
    localStorage.setItem("loginUserInfo","true");
    this.router.navigate(['/customer'])
return true;
  }

  ngOnDestroy(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: '',
    });
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
