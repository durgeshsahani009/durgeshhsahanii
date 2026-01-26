import { Component } from '@angular/core';
import { Tutorial } from '../../../services/tutorial';

@Component({
  selector: 'app-javascript-core',
  imports: [],
  templateUrl: './javascript-core.html',
  styleUrl: './javascript-core.scss',
})
export class JavascriptCore {
wraperWD:any=0;
  constructor(private tutorialservice: Tutorial){
       
  }
  ngOnInit(): void {
    let wd:any = (document.body.querySelector('.container')?.clientWidth  as any)- 60 
    this.wraperWD = wd + 'px'
    this.fetchascriptCore();
  }

  


  dataset:any=[];
  fetchascriptCore(){
    this.tutorialservice.getJascriptCore().subscribe({
      next:(res:any)=>{
        if(res["status"]==="success"){
          this.dataset = res["data"];    
          console.log(this.dataset)  
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
