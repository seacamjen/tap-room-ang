import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div *ngIf="kegFormShow">
    <h3>Add New Keg</h3>
    <div>
      <label>Enter Name:</label>
      <input #name>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #brand>
    </div>
    <div>
      <label>Enter Price:</label>
      <input #price>
    </div>
    <div>
      <label>Enter ABV:</label>
      <input #alcoholContent>
    </div>
    <button (click)="save(name.value, brand.value, price.value, alcoholContent.value); name.value=''; brand.value=''; price.value=''; alcoholContent.value=''">Save</button>
  </div>
  `
})

export class NewKegComponent {
  @Input() kegFormShow: boolean;
  @Output() newKegSender = new EventEmitter();

  save(name: string, brand: string, price: string, alcoholContent: string){
    var newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(alcoholContent));
    this.newKegSender.emit(newKeg);
  }
}
