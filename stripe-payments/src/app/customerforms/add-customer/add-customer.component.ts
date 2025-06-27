import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  private dialog=inject(MatDialog)

  openDialog(): void {
    const dialogRef = this.dialog.open(ContainerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // if (result !== undefined) {
      //   this.animal.set(result);
      // }
    });
  }
}
