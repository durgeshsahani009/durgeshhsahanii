import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../services/auth';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { Login } from '../../common/login/login';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet,  RouterLink, DialogModule],
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
    private dialog:MatDialog,
    private route: ActivatedRoute) {
      document.body.classList.add('profile');
  }

  ngOnInit(): void {
      let wd = document.body.clientWidth;
      if(wd<768) this.isMobile=true;
      else this.isMobile=false;
  }

  login(){
    this.dialog.open(Login, {
      width:"500px",
      maxWidth:"550px",
      height:"auto",
      panelClass:['login_panel'],
      data:[]
    })
  }
}
