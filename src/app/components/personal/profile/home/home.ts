import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Skill } from '../skill/skill';

@Component({
  selector: 'app-home',
  imports: [About, Contact, Skill],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  contactform!: FormGroup;
  landingBG: any = "url('./images/bg_image_gray.jpg')";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['ids']) {
        let sect: any = document.querySelector(`.${params['ids']}`) as HTMLElement | null
        let offset = sect.offsetTop
        window.scrollTo({ top: offset, left: 0, behavior: 'smooth' });
      }
    })

  }

}
