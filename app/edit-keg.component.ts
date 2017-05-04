import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="kegToEdit">
      <h3>{{kegToEdit.name}}</h3>
      <div>
        <label>Enter Name:</label>
        <input [(ngModel)]="kegToEdit.name">
      </div>
      <div>
        <label>Enter Brand:</label>
        <input [(ngModel)]="kegToEdit.brand">
      </div>
      <div>
        <label>Enter Price:</label>
        <input [(ngModel)]="kegToEdit.price">
      </div>
      <div>
        <label>Enter ABV:</label>
        <input [(ngModel)]="kegToEdit.alcoholContent">
      </div>
      <button (click)="completeUpdate()">Update</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() kegToEdit: Keg;
  @Output() editSender = new EventEmitter();

  completeUpdate() {
    this.editSender.emit();
  }
}
