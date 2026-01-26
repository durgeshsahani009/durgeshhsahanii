import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-english',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './english.html',
  styles: [` `]
})
export class EnglishComponent {
  navItems: any = this.getMenus();
  isActiveMenu: boolean = false;
  constructor(private router: Router) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.isActiveMenu = false);
    document.body.classList.remove('english');
  }


  getMenus() {
    return [    
      { name: "useofphrases", title: "Use of Phrases", active: true }        
    ]
  }
}
