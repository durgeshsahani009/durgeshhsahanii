import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../services/auth';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './profile.html',
  styles: [`
    @use  "header";
    `]
})
export class Profile implements OnInit {
 clicked:boolean=false;
 isMobile:boolean=false;
  constructor(
    public authService:Auth,
    private router: Router,
    private route: ActivatedRoute) {
      document.body.classList.add('profile');
  }

  ngOnInit(): void {
      let wd = document.body.clientWidth;
      if(wd<768) this.isMobile=true;
      else this.isMobile=false;
  }
}
