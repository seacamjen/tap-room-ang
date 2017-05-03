import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container-fluid header">
  </div>
  <nav class="navbar navbar-default" data-spy="affix" data-offset-top="200">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Tappity Taps</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a (click)="toggleAdmin()">Admin View</a></li>
        <li *ngIf="adminView"><a (click)="toggleButtons()">Customer View</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <keg-list [childKegList]="allKegs"></keg-list>

    <div *ngIf="adminView">
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
  </div>
  `
})

export class AppComponent {
  allKegs: Keg[] = [];
  adminView = false;

  addKeg(newKegFromChild: Keg) {
    this.allKegs.push(newKegFromChild);
  }

  toggleAdmin() {
    this.adminView = true;
  }

  toggleButtons() {
    this.adminView = false;
  }

  // updatePints(pintsFromChild: Keg) {
  //
  // }
  // (pintsSender)="updatePints($event)"
}
