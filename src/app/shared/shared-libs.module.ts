import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class RecruitersSharedLibsModule {}
