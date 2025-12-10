import { Component } from '@angular/core';
import { Tutorial } from '../../../services/tutorial';
import { Highlight } from '../../../core/highlight';
@Component({
  selector: 'app-javascript',
  imports: [Highlight],
  templateUrl: './javascript.html',
  styleUrl: './javascript.scss',
})
export class Javascript {
  warperWD: any = 0;
  constructor(private tutorialService: Tutorial) { }

  ngOnInit(): void {
    let jw: any = (document.body.querySelector('.container')?.clientWidth as any) - 60
    this.warperWD = jw + 'px'
    this.fetchJavascript();
  }

  dataset: any = []
  fetchJavascript() {
    this.tutorialService.getJavaScrript().subscribe({
      next: (res: any) => {
        if (res["status"] === "success") {
          this.dataset = res["data"]
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

  spaces(numb: any) {
    let space: any = "";
    for (let i = 0; i < numb; i++) {
      space += ' '
    }
    return space;
  }
}
