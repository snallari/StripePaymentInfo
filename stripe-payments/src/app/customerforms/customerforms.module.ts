import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerformsRoutingModule } from './customerforms-routing.module';
import { CustomerformsComponent } from './customerforms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { FamilydetailsComponent } from './familydetails/familydetails.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { ExperienceComponent } from './experience/experience.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  declarations: [
    CustomerformsComponent,
    ExperienceComponent,
    ContainerComponent,
    AddCustomerComponent,
    CustomerAddressComponent,
    FamilydetailsComponent,
    ConfirmationComponentComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    CustomerformsRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatDatepickerModule
  ]
})
export class CustomerformsModule { }
