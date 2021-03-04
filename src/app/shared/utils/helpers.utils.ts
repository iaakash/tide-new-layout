import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperUtils {
  private readonly _sessionStorageDefaultKey = 'shared';
  private readonly _localStorageDefaultKey = 'local_shared';

  constructor(private _breakpointObserver: BreakpointObserver) {}



  public getMediaBreakpoint(breakpoint): Observable<boolean> {
    return this._breakpointObserver.observe([breakpoint]).pipe(map((state: BreakpointState) => state.matches));
  }

  
}
