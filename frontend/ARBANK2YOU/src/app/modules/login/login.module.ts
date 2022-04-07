import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component:LoginComponent}];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoginRoutingModule
  ],
  exports:[RouterModule, LoginComponent]
})
export class LoginModule { }
