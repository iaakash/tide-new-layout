import { TabBarComponent } from './../shared/components/tab-bar/tab-bar.component';
import { HelperUtils } from './../shared/utils/helpers.utils';
import { Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
  selector: 'app-layout-minimal',
  templateUrl: './layout-minimal.component.html',
  styleUrls: ['./layout-minimal.component.scss']
})
export class LayoutMinimalComponent implements OnInit {

  isMobileView$:any;
  tabBar: ElementRef<TabBarComponent>;

  events: string[] = [];
  opened: boolean;
  hideTrigger: boolean;

  @ContentChild("primaryButton") primaryButton: ElementRef;

  constructor(private _helper: HelperUtils, private renderer: Renderer2) { }

  ngOnInit(): void {

    // const buttonWrapper = document.querySelector('.ctas');
    // console.log('buttonWrapper::', buttonWrapper);

    this.isMobileView$ = this._helper.getMediaBreakpoint(EMediaBreakpoints.Xs)


    this.isMobileView$.pipe(tap(res => {
      if(!res) {
this.opened = true;
this.hideTrigger = true;
      }else {
        this.opened = false;
this.hideTrigger = false;
      }
    })).subscribe();

    const primaryButton = document.querySelector('.ctas .wrapper button.primary');

    console.log(document.getElementsByClassName('.ctas .wrapper'));


  }



  ngAfterViewInit() {
    console.log(document.getElementsByClassName('.ctas .wrapper'));
    // setTimeout(_ => {
    //   console.log(this.tabBar.nativeElement);

    // }, 1000);

      // const buttonWrapper = document.querySelector('.ctas');
      //   console.log('buttonWrapper::', buttonWrapper);
  }

}
