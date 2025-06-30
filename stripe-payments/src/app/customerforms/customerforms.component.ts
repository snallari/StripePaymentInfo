import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from './customerservice.service';

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

  constructor(protected router: Router, private customerService: CustomerserviceService) {

  }

  ngOnInit(): void {
    this.customerService.getFormData().subscribe((data) => {
      console.log("updates", data)
    })
  }

  onSubmit() {
  }

  next() {
    this.customerService.changeFormData({ customer: this.customerForm.value });
    console.log("log", this.customerService.customerForm.customer)
    this.router.navigate(['/customer/address'])
  }

}
