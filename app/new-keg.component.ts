import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>Tappity Tap Kegs</h1>
    <h2>New Keg</h2>
    <div>
      <label>Enter Name:</label>
      <input #name>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #brand>
    </div>
    <div>
      <label>Enter price:</label>
      <input #price>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input #alcoholContent>
    </div>
    <button (click)="save(name.value, brand.value, price.value, alcoholContent.value); name.value=''; brand.value=''; price.value=''; alcoholContent.value=''">Save</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  save(name: string, brand: string, price: string, alcoholContent: string){
    var newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(alcoholContent));
    this.newKegSender.emit(newKeg);
  }
}
