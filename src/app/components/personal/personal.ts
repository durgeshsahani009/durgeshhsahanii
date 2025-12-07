import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-personal',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class Personal {
  navItems: any = this.getMenus();
  isActiveMenu: boolean = false;
  constructor(private router: Router) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.isActiveMenu = false);
  }


  getMenus() {
    return [
      { name: "name-number", title: "Name Number", active: true },
      { name: "birth-chart", title: "Birth Chart", active: true }
    ]
  }
}
