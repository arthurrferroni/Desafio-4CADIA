import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LinkNewAccountComponent } from './link-new-account/link-new-account.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';

const routes: Routes = [
  {
    path:'',
    component:MyAccountsComponent
  },
  {
    path:'link-account',
    component:LinkNewAccountComponent
  },
  {
    path:'account-details/:accountId',
    component:AccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
