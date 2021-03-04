import { APP_CONFIG } from './config';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';

export enum Layouts {
  Minimal,
  Main,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Layouts = Layouts;
  layout: Layouts;
  key;
  config = APP_CONFIG;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {


    this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.route),
            map((route:any) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data)
    )
            .subscribe((event: any) => {

              this.key = event.key;
              // this.layout = event.layout;
            });

  }
}
