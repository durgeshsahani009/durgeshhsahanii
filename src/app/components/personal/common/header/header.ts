import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
navItems:any = this.getMenus();
isActiveMenu:boolean=false;
  constructor(private router:Router){
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.isActiveMenu=false);
  }
  

  getMenus() {
    return [
      { name: "name-number", title: "Name Number", active:true},
      { name: "birth-chart", title: "Birth Chart" , active:true}      
    ]
  }
}
