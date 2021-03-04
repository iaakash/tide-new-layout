import { HelperUtils } from './../utils/helpers.utils';
import {ComponentPortal, DomPortal, Portal, TemplatePortal, DomPortalOutlet, CdkPortal} from '@angular/cdk/portal';

import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef
} from '@angular/core';
import { filter, tap } from 'rxjs/operators';

export enum EMediaBreakpoints {
  Xs = '(max-width: 599px)',
  Sm = '(min-width: 600px) and (max-width: 959px)',
  Md = '(min-width: 960px) and (max-width: 1279px)',
  Lg = '(min-width: 1280px) and (max-width: 1919px)',
  Xl = '(min-width: 1920px) and (max-width: 5000px)',
  LtSm = '(max-width: 599px)',
  LtMd = '(max-width: 959px)',
  LtLg = '(max-width: 1279px)',
  LtXl = '(max-width: 1919px)',
  GtXs = '(min-width: 600px)',
  GtSm = '(min-width: 960px)',
  GtMd = '(min-width: 1280px)',
  GtLg = '(min-width: 1920px)'
}

@Component({
  selector: 'app-header-more',
  templateUrl: './header-more.component.html',
  styleUrls: ['./header-more.component.scss']
})
export class HeaderMoreComponent implements AfterViewInit {

  isMobileView$:any;
  private portalHost: DomPortalOutlet;
  @ViewChild(CdkPortal) portal;

  constructor(private _viewContainerRef: ViewContainerRef,  private componentFactoryResolver: ComponentFactoryResolver,     private injector: Injector,
    private appRef: ApplicationRef, private _helper: HelperUtils) { }

  ngAfterViewInit() {

    setTimeout(_ => {
      this._helper.getMediaBreakpoint(EMediaBreakpoints.Xs).pipe(
        filter(res => !!res),
        tap(_ => {
         const footerEl = document.querySelector('.header-more-options');
         if(footerEl) {
           footerEl.innerHTML = '';
         }
        })
        ).subscribe(_ => {
       this.portalHost = new DomPortalOutlet(
         document.querySelector('.header-more-options'),
         this.componentFactoryResolver,
         this.appRef,
         this.injector
       );

        // Attach portal to host
        if(this.portalHost && this.portal) {
         this.portalHost.attach(this.portal);
        }
      })
    }, 0);


  }

}
