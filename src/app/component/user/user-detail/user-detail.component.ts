import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    street: new FormControl('', Validators.required),
    suite: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    phone: new FormControl(''),
    website: new FormControl(''),
    company: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  saveClicked() {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;
    else this.form.disable();
  }
}
