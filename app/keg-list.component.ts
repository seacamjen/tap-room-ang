import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: `keg-list`,
  template: `
  <ul *ngFor="let currentKeg of childKegList">
    <li>{{currentKeg.name}}</li>
    <li>{{currentKeg.brand}}</li>
    <li>{{currentKeg.price}}</li>
    <li>{{currentKeg.alcoholContent}}</li>
    <li>{{currentKeg.pints}}</li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg [];
  @Output() clickSender = new EventEmitter();


}
