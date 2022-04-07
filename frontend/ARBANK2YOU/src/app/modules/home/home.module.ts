import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { DropdownModule } from 'primeng/dropdown'
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropdownModule,
    ChartModule
  ]
})
export class HomeModule { }
