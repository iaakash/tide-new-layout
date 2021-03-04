import { HelperUtils } from './../../utils/helpers.utils';
import { Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

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
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  @ContentChild("ctas") ctas: ElementRef;
  isMobileView$:any;

  constructor(private renderer: Renderer2,private _helper: HelperUtils, ) { }

  ngOnInit(): void {
    // this.isMobileView$ = this._helper.getMediaBreakpoint(EMediaBreakpoints.Xs);
    // this.isMobileView$.subscribe(res => {
    //   if(res) {
    //     this.renderer.addClass(this.primaryButton.nativeElement,  'hide');
    //   }else {
    //     this.renderer.removeClass(this.primaryButton.nativeElement,  'show');
    //   }
    // })
  }

  ngAfterContentInit() {
    this.isMobileView$ = this._helper.getMediaBreakpoint(EMediaBreakpoints.Xs);
    this.isMobileView$.subscribe(res => {
      if(res) {
        this.renderer.addClass(this.ctas.nativeElement,  'hide');
      }else {
        this.renderer.removeClass(this.ctas.nativeElement,  'hide');
      }
    })
  }
}
