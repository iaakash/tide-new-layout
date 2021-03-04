import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { TideFooterComponent } from './tide-footer/tide-footer.component';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutMinimalComponent } from './layout-minimal/layout-minimal.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TideFooterComponent,
    LayoutMinimalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
