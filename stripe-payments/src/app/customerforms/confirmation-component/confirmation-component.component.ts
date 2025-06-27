import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.scss']
})
export class ConfirmationComponentComponent {
  showConfirmation: boolean=false;
  confirm(){
    this.showConfirmation=true
  }

}
