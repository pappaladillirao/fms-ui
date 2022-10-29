import { NgModule } from '@angular/core';
import { RecruitersSharedLibsModule } from './shared-libs.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    RecruitersSharedLibsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    NgxWebstorageModule.forRoot({ prefix: 'forecast', separator: '-' }),
    ],
  exports: [
    RecruitersSharedLibsModule,
  ],
  providers: [
    Title,
    CookieService,
  ],
})
export class RecruitersSharedModule {}
