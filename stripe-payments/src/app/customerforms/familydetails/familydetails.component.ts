import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(protected router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log("customerform", this.familyDetails)
  }

  next() {
    this.router.navigate(['/customer/confirmation'])
  }

}
