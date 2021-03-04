import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerPageComponent } from './customer-page/customer-page.component';


@NgModule({
  declarations: [CustomerPageComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatMenuModule,
    MatIconModule,
    SharedModule,
  ]
})
export class CustomerModule { }
