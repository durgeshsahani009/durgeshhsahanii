import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-default',
  imports: [RouterLink],
  templateUrl: './default.html',
  styleUrl: './default.scss',
})
export class Default {
navItems:any = this.getMenus();


  constructor(public authService:Auth) {
    document.body.classList.remove('profile');
  }
  
  getMenus() {
    return [
      {
        module: "tutorial", title: "Tutorial", path: "/m/tutorial/", 
        description:"Some quick example text to build on the card title and make up the bulk of the card's content", 
        children:[
          { name: "js-basics", title: "JavaScript Basics", color: "btn-primary", active: true },
          { name: "javascript-es6", title: "JavaScript ES6", color:"btn-primary", active: true },
          { name: "angular", title: "Angular", color: "btn-primary", active: true },
          { name: "mongodb", title: "MongoDB", color: "btn-primary", active: true },
          { name: "nodejs", title: "Nodejs", color: "btn-primary", active: true },          
          { name: "jscore", title: "JavaScript Core", color: "btn-primary", active: true },
          { name: "linux", title: "Linux Command", color: "btn-primary", active: true },
          { name: "es5-6", title: "ES5 / ES6", color: "btn-primary", active: false },
          { name: "javaScript-reasoning", title: "JavaScript Reasoning", color: "btn-primary", active: false },
          { name: "oojs-programing", title: "OOJS Programing", color: "btn-primary", active: false },
          { name: "js-tricky-questions", title: "Js Tricky Questions", color: "btn-primary", active: false },
          { name: "angular-exercises", title: "Angular Exercises", color: "btn-primary", active: false },
          { name: "jQuery", title: "jQuery", color: "btn-primary", active: false },
          { name: "html-css", title: "HTML / CSS", color: "btn-primary", active: true },
          { name: "profile", title: "Profile", color: "btn-primary", active: false },
          { name: "commands", title: "CMD Commands", color: "btn-primary", active: false },
      ]},
      {
        module: "personal", title: "Personal", path: "/personal/",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        children: [          
          { name: "occult", title: "Occult Science", color: "btn-warning", active: true },        
        ]},
      {
        module: "speaking", title: "E-Language ", path: "/m/speaking/",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        children: [
          { name: "useofphrases", title: "Use of Phrases", color: "btn-success", active: true }        
        ]
      },

      {
        module: "finance", title: "Finance", path: "/m/finance/",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        children: [
          { name: "stock-tracking", title: "Stock Tracking", color: "btn-danger", active: true } ,
          { name: "add-stock", title: "Add Stock", color: "btn-danger", active: true }   
        ]
      },


    ]
  }
}
