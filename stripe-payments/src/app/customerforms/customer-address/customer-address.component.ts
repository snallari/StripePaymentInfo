import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit{
  constructor(protected router: Router, private customerService: CustomerserviceService) {

  }
  ngOnInit(): void {

  }
  customerAddress = new FormGroup({
    indianStAddress: new FormControl(""),
    indianCity: new FormControl(""),
    indianState: new FormControl(""),
    usStAddress: new FormControl(""),
    usCity: new FormControl(""),
    usState: new FormControl(""),
  })
  onSubmit() {

  }
  next() {
    console.log("log",this.customerService.customerForm.customer)
    this.customerService.changeFormData({ address: this.customerAddress.value});
    this.router.navigate(['/customer/experience'])
  }
}
