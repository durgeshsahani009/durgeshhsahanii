import { Component } from '@angular/core';
import { Header } from '../../common/header/header';

@Component({
  selector: 'app-birth-chart',
  imports: [Header],
  templateUrl: './birth-chart.html',
  styleUrl: './birth-chart.scss',
})
export class BirthChart {

  constructor(){}

  _driver:any;
  _conductor:any;
  _kua:any;
  createChart(data:any) {
    let g:any= (document.querySelector('input[type="radio"]:checked') as any).value;   
    let date = new Date(data).getDate();
    let year = new Date(data).getFullYear();
    let datenumbers = data.split('-').join('').split('').filter((k:any)=>k!==0).join('');   
    this._driver = getTotal(date);
    this._conductor = getTotal(datenumbers);
    this._kua = getKua(year, g);
    let allnums = datenumbers+this._driver+this._conductor+this._kua;
    let ref = [[4,9,2],[3,5,7],[8,1,6]];
    let temp="";
    let numsArr = allnums.split('').map((m:any)=> parseInt(m));
    ref.forEach((item:any)=>{
      temp += `<tr>`;
      item.forEach((subItem:any)=>{
        temp += `<td>${nums(numsArr, subItem)}</td>`
      })
      temp += `</tr>`
    })
    document.querySelector('.chart_grid')!.innerHTML = temp;

    function getTotal(num:any){
      let result:any = 0;
      if(num<10) result = num;
      else{
        let arr = num.toString().split('').map((k:any)=> parseInt(k));
        let total = arr.reduce((total:any, current:any)=> total+current,0);
        if(total >9) result = getTotal(total);
        else result = total
      }
      return result
    }

    function getKua(year:any, g:any){
      let k:any=0;
      let _yr = getTotal(year);
      if(g==='m') k = 11 - _yr;
      else k = _yr + 4
      k = getTotal(k)
      return k;
    }

    function nums(numsArr:any, subItem:any){
       let result:any=""
       let nums:any =  numsArr.filter((k: any) => k === subItem);
       if (nums?.length) result = nums.join(',');
       else result = '&nbsp;'
      return result;
    }
  }

}
