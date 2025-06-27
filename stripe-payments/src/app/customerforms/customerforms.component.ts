import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerforms',
  templateUrl: './customerforms.component.html',
  styleUrls: ['./customerforms.component.scss']
})
export class CustomerformsComponent implements OnInit {
  customerForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phoneNumber: new FormControl("")
  })

  constructor(protected router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log("customerform", this.customerForm)
  }

  next() {
    this.router.navigate(['/customer/address'])
  }

}
