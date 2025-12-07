import { Component } from '@angular/core';
import { Header } from '../../common/header/header';

@Component({
  selector: 'app-name-number',
  imports: [Header],
  templateUrl: './name-number.html',
  styleUrl: './name-number.scss',
})
export class NameNumber {
totalNo: any = 0;
  subTotal: any = 0;
  getNameNumber(data: any) {
    this.totalNo = 0;
    const charnums: any = ["aijqy", "bkr", "cgls", "dmt", "henx", "uvw", "zo", "pf"];
    let namechar = data.toLowerCase();
    namechar.split('').forEach((k: any) => {
      charnums.forEach((m: any, i: number) => {
        if (m.toString().includes(k)) this.totalNo += i + 1;
      })
    })
    this.subTotal = getTotal(this.totalNo);

    function getTotal(num: any) {
      let result: any = 0;
      if (num < 10) result = num;
      else {
        let arr = num.toString().split('').map((k: any) => parseInt(k));
        let total = arr.reduce((total: any, current: any) => total + current, 0);
        if (total > 9) result = getTotal(total);
        else result = total
      }
      return result
    }
  }

  // getCombineNo(num: any) {
  //   if (num <= 9) return 0;
  //   let total: any = 0
  //   if (num > 9) {
  //     total = num.toString().split('').map((k: any) => parseInt(k))
  //       .reduce((a: any, b: any) => a + b, 0);
  //     if (total > 9) {
  //       this.getCombineNo(total);
  //     }
  //   }
  //   return total;
  // }

 
}
