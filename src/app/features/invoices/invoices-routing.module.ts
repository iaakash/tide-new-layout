import { Layouts } from './../../app.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InvoicePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        loadChildren: () => import('./../overview/overview.module').then(m => m.OverviewModule),
        data: { key: 'overview' },

      },

      {
        path: 'customer',
        loadChildren: () => import('./../customer/customer.module').then(m => m.CustomerModule),
        data: { key: 'customer' },
      },
      {
        path: 'settings',
        loadChildren: () => import('./../settings/settings.module').then(m => m.SettingsModule)
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {
  constructor() {
  }
}
