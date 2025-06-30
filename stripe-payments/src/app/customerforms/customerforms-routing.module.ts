import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerformsComponent } from './customerforms.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { FamilydetailsComponent } from './familydetails/familydetails.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'self', component: CustomerformsComponent},
  {path: 'address', component: CustomerAddressComponent},
  { path: 'experience', component: ExperienceComponent},
  {path: 'familyDetails', component: FamilydetailsComponent},
  {path:'confirmation', component:ConfirmationComponentComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerformsRoutingModule { }
