import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tutorials',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './finance.html',
  styles: [`
    .content{margin-top: 50px;}
    .fa{font:normal normal normal 14px/1 FontAwesome;}
    `]
})
export class FinanceComponent {
  navItems: any = this.getMenus();
  isActiveMenu: boolean = false;
  constructor(private router: Router) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.isActiveMenu = false);
      document.body.classList.remove('profile');
  }


  getMenus() {
    return [
      { name: "stock-tracking", title: "Stock Tracking", active: true },
      { name: "add-stock", title: "Add Stock", active: true },
    ]
  }
}
