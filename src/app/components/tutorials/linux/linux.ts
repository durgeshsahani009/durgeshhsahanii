import { Component } from '@angular/core';
import { Tutorial } from '../../../services/tutorial';

@Component({
  selector: 'app-linux',
  imports: [],
  templateUrl: './linux.html',
  styleUrl: './linux.scss',
})
export class Linux {

  constructor(private tutorialservice: Tutorial) {
    this.fetchLinux();
  }


  dataset: any = [];
  fetchLinux() {
    this.tutorialservice.getlinux().subscribe({
      next: (res: any) => {
        if (res["status"] === "success") {
          this.dataset = res["data"];
          console.log(this.dataset)
        }
      },
      error: (err: any) => console.log(err)
    })
  }

  getIndex(index: number) {
    index = index + 1;
    let i: any = 0;
    if (index < 10) i = '[0' + index + '].';
    else i = '[' + index + '].';
    return i;
  }

}
