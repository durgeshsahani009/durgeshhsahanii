import { Component } from '@angular/core';
import { Tutorial } from '../../../services/tutorial';
import { Highlight } from '../../../core/highlight';

@Component({
  selector: 'app-angular',
  imports: [Highlight],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
wraperWD:any=0;
  constructor(private tutorialservice: Tutorial){
   
    
  }
  ngOnInit(): void {
    let wd:any = (document.body.querySelector('.container')?.clientWidth  as any)- 60 
    this.wraperWD = wd + 'px'
    this.fetchAngular();
  }

  


  dataset:any=[];
  fetchAngular(){
    this.tutorialservice.getAngular().subscribe({
      next:(res:any)=>{
        if(res["status"]==="success"){
          this.dataset = res["data"];      
        }     
       },
      error:(err:any)=> console.log(err)
    })
  }

  getIndex(index:number){
    index = index +1;
    let i:any=0;
    if(index<10) i = '[0'+index+'].';
    else i = '['+index+'].';
    return i;
  }

  spaces(numb:any){
    let space:any="";
    for(let i=0; i<numb; i++){
      space += ' '
    }
    return space;
  }

}
