import { Layouts } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    children: [
      {
path :'',
redirectTo :'invoices',
pathMatch: 'full'
      },
        {
          path: 'invoices',
          loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule),
        },
        {
          path: 'invoices/:id/create-invoice',
          loadChildren: () => import('./features/create-invoice/create-invoice.module').then(m => m.CreateInvoiceModule),
          data: { key: 'create-invoice' },
        }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
