import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { FooterActionComponent } from './components/footer-action/footer-action.component';
import { PortalModule } from '@angular/cdk/portal';
import { HeaderMoreComponent } from './header-more/header-more.component';

@NgModule({
  declarations: [TabBarComponent, ContentLoaderComponent, FooterActionComponent, HeaderMoreComponent],
  imports: [
    CommonModule,
    PortalModule,
    
    SharedRoutingModule
  ],
  exports: [TabBarComponent, ContentLoaderComponent, FooterActionComponent, HeaderMoreComponent]
})
export class SharedModule { }
