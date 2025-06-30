import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.scss']
})
export class ConfirmationComponentComponent implements OnInit {
  actualData: any = {}
  jsonData: any = {}
  signatureData: string = ''
  constructor(private customerService: CustomerserviceService) {

  }
  ngOnInit(): void {
    this.customerService.getFormData().subscribe((data) => {
      console.log("updates", data)
      this.actualData = JSON.stringify(data)
    })
  }

  showConfirmation: boolean = false;
  confirm() {
    this.showConfirmation = true
    console.log("json", this.actualData)
    this.jsonData = JSON.parse(this.actualData)
    console.log("json", this.jsonData)
    this.convertJSONToPDF()
  }
  convertJSONToPDF() {
    const { firstName, lastName, phoneNumber } = this.jsonData.customer;
    const { usStAddress, usCity, usState } = this.jsonData.address;
    console.log("experience", this.jsonData.experience)
    const docs = new jsPDF();
    let y = 20;
    docs.setFontSize(20)
    docs.setFillColor("#808080")
    docs.text("Details:", 15, y,{ align: 'center' });
    y += 20;
    docs.setFillColor("#808080")
    docs.setFontSize(12)
    docs.text(`Name: ${firstName} ${lastName}`, 10, y);
    y += 10;
    docs.text(`Phone Number: ${phoneNumber}`, 10, y);
    // docs.setFontSize(12)
    y += 15;
    docs.text("Address:", 10, y);
    y += 10;
    //docs.setFontSize(12)
    docs.text(`Street: ${usStAddress}`, 10, y);
    y += 10;
    //docs.setFontSize(12)
    docs.text(`City: ${usCity}`, 10, y);
    y += 10;
    //docs.setFontSize(12)
    docs.text(`State: ${usState}`, 10, y);
    y += 20;
    docs.setFontSize(16)
    docs.text(`EXPIRENCES`, 10, y)
    for (let ex of this.jsonData.experience) {
      docs.setFontSize(12)
      y += 10;
      docs.text(`Company:${ex.addCompany}`, 10, y)
      y += 10;
      docs.text(`Description:${ex.addDescription}`, 10, y, {maxWidth:150})
      y += 10;
    }
    if (this.signatureData) {
      // Place signature at (10, y) with width 100, height 40
      y += 10;
      docs.text("Signature:", 10, y);
      y += 10;
      docs.addImage(this.signatureData, 'PNG', 10, y, 100, 40);
      y += 50;
    }
    docs.save("saive.pdf");
  }
}
