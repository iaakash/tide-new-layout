import { InvoicesRoutingModule } from './invoices-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';



@NgModule({
  declarations: [InvoicePageComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
