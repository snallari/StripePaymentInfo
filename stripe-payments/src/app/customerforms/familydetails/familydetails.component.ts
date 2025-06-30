import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-familydetails',
  templateUrl: './familydetails.component.html',
  styleUrls: ['./familydetails.component.scss']
})
export class FamilydetailsComponent implements OnInit {
  familyDetails = new FormGroup({
    fathersFirstName: new FormControl(""),
    fathersLastName: new FormControl(""),
    fathersPhoneNumber: new FormControl(""),
    mothersFirstName: new FormControl(""),
    mothersLastName: new FormControl(""),
    mothersPhoneNumber: new FormControl("")
  })

  constructor(protected router: Router, private customerService: CustomerserviceService) {

  }

  ngOnInit(): void {
  
  }

  onSubmit() {
    console.log("customer", this.customerService.customerForm)
  }

  next() {
    console.log("log",this.customerService.customerForm.customer)
    this.customerService.changeFormData({familyDetails: this.familyDetails.value});
    this.router.navigate(['/customer/confirmation'])
  }

}
