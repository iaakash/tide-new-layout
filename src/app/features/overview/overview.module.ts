import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    SharedModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
