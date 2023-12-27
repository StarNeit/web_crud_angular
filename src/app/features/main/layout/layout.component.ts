import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, EventType, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public layoutService: LayoutService
  ) {}

  ngOnInit() {
    const lastRoute = this.getLastChildRoute(this.activatedRoute);
    lastRoute.title.subscribe(title =>
      this.layoutService.setPageTitle(title || '')
    );

    this.watchPageTitle();
  }

  private watchPageTitle() {
    this.router.events
      .pipe(
        filter(event => event.type === EventType.NavigationEnd),
        map(() => this.getLastChildRoute(this.activatedRoute)),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.title)
      )
      .subscribe(title => this.layoutService.setPageTitle(title || ''));
  }

  private getLastChildRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
