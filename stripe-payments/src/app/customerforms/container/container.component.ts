import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  constructor(public dialogRef: MatDialogRef<ContainerComponent>){
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
