import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tutorials',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './tutorials.html',
  styles: [` `]
})
export class TutorialsComponent {
  navItems: any = this.getMenus();
  isActiveMenu: boolean = false;
  constructor(private router: Router) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.isActiveMenu = false);
      document.body.classList.remove('profile');
  }


  getMenus() {
    return [
      { name: "javascript", title: "JavaScript", active: true },
      { name: "angular", title: "Angular", active: true },
      { name: "mongodb", title: "MongoDB", active: true },
      { name: "nodejs", title: "Nodejs", active: true },
      { name: "index", title: "Index", active: true },
      { name: "jscore", title: "JavaScript Core", active: false },
      { name: "es5-6", title: "ES5 / ES6", active: false },
      { name: "javaScript-reasoning", title: "JavaScript Reasoning", active: false },
      { name: "oojs-programing", title: "OOJS Programing", active: false },
      { name: "js-tricky-questions", title: "Js Tricky Questions", active: false },
      { name: "angular-exercises", title: "Angular Exercises", active: false },
      { name: "jQuery", title: "jQuery", active: false },
      { name: "html-css", title: "HTML / CSS", active: false },
      { name: "profile", title: "Profile", active: false },
      { name: "commands", title: "CMD Commands", active: false },
    ]
  }
}
