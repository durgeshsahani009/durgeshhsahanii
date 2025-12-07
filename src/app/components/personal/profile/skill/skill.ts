import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-skill',
  imports: [NgFor],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
skillSets:any[]=[];
  constructor(
    private route:ActivatedRoute, 
    private router:Router) { 
    this.skillSets  = this.getSkill();
  }

  ngOnInit(): void {   
    this.router.events.pipe(filter((e:any)=> e instanceof NavigationEnd))
    .subscribe((x:any)=>this.animateSkills())
    
  }

  animateSkills(){
    const originalArr = JSON.parse(JSON.stringify(this.skillSets)); 
    this.skillSets.forEach((x:any)=>{    
      x.expertise = 0;
      x.transition = 'none';
    });    
    setTimeout(()=>{
      this.skillSets = originalArr;
      this.skillSets .forEach((x:any)=>{
      let expert = x.expertise;
      let transi = x.transition;
      x.expertise = 0;
      x.transition = 'none';
      setTimeout(()=> {
        x.expertise = expert;
        x.transition = transi;
      }, 10)
    });
    },0);  
  }

  getSkill(){
    return [
      {id:'1', transition:"width 3s", tech:'HTML5', experience:'10+ Years', expertise:'95%'},
      {id:'1', transition:"width 3s", tech:'CSS3/SCSS', experience:'10+ Years', expertise:'95%'},
      {id:'4', transition:"width 3s", tech:'Bootstrap', experience:'10+ Years', expertise:'95%'},
      {id:'4', transition:"width 3s", tech:'Responsive', experience:'10+ Years', expertise:'95%'},
      {id:'2', transition:"width 3s", tech:'JavaScript', experience:'10+ Years', expertise:'90%'},
      {id:'3', transition:"width 3s", tech:'TypeScript', experience:'10+ Years', expertise:'90%'},
      {id:'6', transition:"width 3s", tech:'Angular 2+', experience:'4 Years', expertise:'90%'},
      {id:'7', transition:"width 3s", tech:'Angular Material', experience:'4 Years', expertise:'85%'},
      {id:'7', transition:"width 3s", tech:'RxJs', experience:'4 Years', expertise:'85%'},
      {id:'5', transition:"width 3s", tech:'Ajax', experience:'9+ Years', expertise:'80%'},
      {id:'8', transition:"width 3s", tech:'Reactjs', experience:'1 Years', expertise:'40%'},
      {id:'11',transition:"width 3s", tech:'jQuery', experience:'9+ Years', expertise:'90%'},
      {id:'9', transition:"width 3s", tech:'Nodejs/Expressjs', experience:'1 Years', expertise:'50%'},
      {id:'10',transition:"width 3s", tech:'Mongodb', experience:'1 Years', expertise:'45%'},
    ]
  }

}
