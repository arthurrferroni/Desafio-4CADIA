import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LinkNewAccountComponent } from './link-new-account/link-new-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LinkNewAccountComponent,
    AccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    DropdownModule,
    CalendarModule,
    FormsModule 
  ]
})
export class AccountsModule { }
