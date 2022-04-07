import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: ()=> import('./modules/login/login.module').then(m=>m.LoginModule),
  },
  {
    path:'register',
    loadChildren: ()=> import ('./modules/registration/registration.module').then (m=>m.RegistrationModule)
  },
  {
    path:'home',
    loadChildren: ()=> import ('./modules/home/home.module').then (m=>m.HomeModule)
  },
  {
    path:'my-accounts',
    loadChildren: ()=> import ('./modules/accounts/accounts.module').then(m=> m.AccountsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
