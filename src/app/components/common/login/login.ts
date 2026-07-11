import { DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [DialogModule, MatDialogContent, MatDialogActions, MatDialogClose, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginform!:FormGroup;

  constructor(private fb:FormBuilder){
    this.loginform= this.initform();
  }

  login(data:any){    
    if(data.username==='durgeshh' && data.password==='profile$41084'){
      localStorage.setItem('user', JSON.stringify(data.username));
      localStorage.setItem('token', 'ABCXYZ007');
    }
  }

  initform(){
    return this.fb.group({
      username:["", Validators.required],
      password:["", Validators.required]
    })
  }

}
