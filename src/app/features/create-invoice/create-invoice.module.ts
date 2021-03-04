import { SharedModule } from './../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoiceRoutingModule } from './create-invoice-routing.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CreateInvoiceComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    CreateInvoiceRoutingModule
  ]
})
export class CreateInvoiceModule { }
