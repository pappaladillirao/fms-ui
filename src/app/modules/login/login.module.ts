import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecruitersSharedModule } from 'src/app/shared/shared.module';


import { LoginComponent } from './login.component';
import { LOGIN_ROUTE } from './login.route';


@NgModule({
  imports: [RecruitersSharedModule,ReactiveFormsModule, RouterModule.forChild(LOGIN_ROUTE)],
  declarations: [LoginComponent],
})
export class LoginModule {}
