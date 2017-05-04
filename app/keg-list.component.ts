import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: `keg-list`,
  template: `
      <div class="row">
        <div *ngFor="let currentKeg of childKegList" class="col-md-6">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="row">
                <div class="col-md-5">
                  <img [src]="quantityImage(currentKeg)" alt="beer glass" />
                </div>
                <div class="col-md-7">
                  <h2>{{currentKeg.name}}</h2>
                  <h3>{{currentKeg.brand}}</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <h3>{{currentKeg.price}}</h3>
                    </div>
                    <div class="col-md-6">
                      <h3>{{currentKeg.alcoholContent}}</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <h4>Price Per Pint</h4>
                    </div>
                    <div class="col-md-6">
                      <h4>ABV</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button [class]="warningColor(currentKeg)" (click)="subtractPint(currentKeg)">Sell Pint</button>
            <button [class]="warningColor(currentKeg)" (click)="subtractGrowler(currentKeg)">Sell Growler</button>
            <button [class]="warningColor(currentKeg)" (click)="subtractLargeGrowler(currentKeg)">Sell Large Growler</button>
          </div>
        </div>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg [];
  @Output() pintsSender = new EventEmitter();

  subtractPint(currentKeg: Keg) {
    currentKeg.pints -= 1;
  }

  subtractGrowler(currentKeg: Keg) {
    currentKeg.pints -= 2;
  }

  subtractLargeGrowler(currentKeg: Keg) {
    currentKeg.pints -= 4;
  }

  quantityImage(currentKeg) {
    if(currentKeg.pints <=25) {
      return "./resources/images/empty.jpg";
    } else if (currentKeg.pints >= 26 && currentKeg.pints <=75 ) {
      return "./resources/images/halffull.jpg";
    } else {
      return "./resources/images/full.jpg";
    }
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
