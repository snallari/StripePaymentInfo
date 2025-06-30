import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceList: any = []
  addExperience = new FormGroup({
    addDescription: new FormControl(""),
    addCompany: new FormControl("")
  })
  constructor(protected router: Router, private customerService: CustomerserviceService) {

  }
  ngOnInit(): void {
  }
  add() {
    let exp = this.addExperience.value
    this.experienceList.push(exp)
  }
  onSubmit() {

  }
  done() {
    this.customerService.changeFormData({ experience: this.experienceList });
    this.router.navigate(['/customer/familyDetails'])
  }

}
