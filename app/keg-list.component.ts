import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: `keg-list`,
  template: `
    <div *ngFor="let currentKeg of childKegList">
      <ul>
        <h3>{{currentKeg.name}}</h3>
        <h4>{{currentKeg.brand}}</h4>
        <li>Price Per Pint: {{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcoholContent}}</li>
        <li>Pints Remaining: {{currentKeg.pints}}</li>
      </ul>
      <button [class]="warningColor(currentKeg)" (click)="subtractPint(currentKeg)">Sell Pint</button>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg [];
  @Output() pintsSender = new EventEmitter();

  subtractPint(currentKeg: Keg) {
    currentKeg.pints -= 1;
  }

  warningColor(currentKeg) {
    if (currentKeg.pints <= 10) {
      return "btn-danger";
    } else if (currentKeg.pints >= 11 && currentKeg.pints <=25 ) {
      return "btn-warning";
    } else {
      return "btn-default";
    }
  }
}
