import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: `keg-list`,
  template: `
      <select (change)="onChange($event.target.value)">
        <option value="allAbv" selected="selected">All Beers</option>
        <option value="highAbv">High ABV Beers</option>
        <option value="lowAbv">Low ABV Beers</option>
      </select>

      <select *ngIf="admin" (change)="onChangeFull($event.target.value)">
        <option value="full">Full Keg</option>
        <option value="half">Half Keg</option>
        <option value="low">Low Keg</option>
        <option value="empty">Empty Keg</option>
        <option value="nonempty" selected="selected">All Kegs With Something</option>
      </select>

      <div class="row">
        <div *ngFor="let currentKeg of childKegList | abv:filterByAbv | fullness:filterByFullness" class="col-md-6">
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
            <button *ngIf="admin" [class]="warningColor(currentKeg)" (click)="subtractPint(currentKeg)">Sell Pint</button>
            <button *ngIf="admin" [class]="warningColor(currentKeg)" (click)="subtractGrowler(currentKeg)">Sell Growler</button>
            <button *ngIf="admin" [class]="warningColor(currentKeg)" (click)="subtractLargeGrowler(currentKeg)">Sell Large Growler</button>
            <button *ngIf="admin" (click)="kegToEdit(currentKeg)">Edit Keg</button>
          </div>
        </div>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg [];
  @Input() admin: boolean;
  @Output() pintsSender = new EventEmitter();
  @Output() kegToEditSender = new EventEmitter();

  filterByAbv: string = "allAbv";
  filterByFullness: string = "nonempty";

  onChange(optionFromMenu) {
    this.filterByAbv = optionFromMenu;
  }

  onChangeFull(selectionFromMenu) {
    this.filterByFullness = selectionFromMenu;
  }

  kegToEdit(currentKeg: Keg) {
    this.kegToEditSender.emit(currentKeg);
  }

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
