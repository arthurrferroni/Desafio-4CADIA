import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule,
    CalendarModule
  ],
  exports: [
    RegistrationFormComponent
  ]
})
export class RegistrationModule { }
