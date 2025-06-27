import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent {
  constructor(protected router:Router){

  }
   customerAddress = new FormGroup({
      indianStAddress: new FormControl(""),
      indianCity: new FormControl(""),
      indianState: new FormControl(""),
      usStAddress: new FormControl(""),
      usCity: new FormControl(""),
      usState: new FormControl(""),
    })
    onSubmit(){
      this.customerAddress
    }
    next(){
       this.router.navigate(['/customer/familyDetails'])
    }
}
