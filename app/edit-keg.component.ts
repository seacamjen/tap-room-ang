import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template: `
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
      <label>Enter Alcohol Content:</label>
      <input #alcoholContent>
    </div>
    <button (click)="save(name.value, brand.value, price.value, alcoholContent.value); name.value=''; brand.value=''; price.value=''; alcoholContent.value=''">Save</button>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() editSender = new EventEmitter();

}
