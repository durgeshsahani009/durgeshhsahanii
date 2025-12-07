import { Component } from '@angular/core';
import { Common } from '../../../../services/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactform: FormGroup;
  contact_data: any = {}

  constructor(private commonService: Common) {
    this.contactform = new FormGroup({
      e_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+')]),
      e_email: new FormControl('', [Validators.required, Validators.email]),
      e_subject: new FormControl('', Validators.required),
      e_message: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  visitUs(formvalue: any) {
    this.commonService.getInTouch(formvalue).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    )
    this.contactform.reset();
  }
}
