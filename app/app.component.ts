import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container-fluid header">
    <h1>Tappity Taps</h1>
  </div>
  <nav class="navbar navbar-default" data-spy="affix" data-offset-top="200">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Tappity Taps</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="/">Home</a></li>
      </ul>
      <ul class="nav navbar-nav pull-right">
        <li *ngIf="!adminView"><a (click)="toggleAdmin()">Admin View</a></li>
        <li *ngIf="adminView"><a (click)="toggleButtons()">Customer View</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div *ngIf="adminView">
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
    <keg-list [childKegList]="allKegs" [admin]="adminView"></keg-list>
  </div>
  `
})

export class AppComponent {
  allKegs: Keg[] = [
    new Keg('Olympia Lager', 'Olympia Brewing', 3, 4.78),
    new Keg('805', 'Firestone Walker', 4, 4.7),
    new Keg('Free Range Red', 'Laurelwood Brewing', 6, 6.2)
  ];
  adminView = false;
  addKegForm = false;

  addKeg(newKegFromChild: Keg) {
    this.allKegs.push(newKegFromChild);
  }

  toggleAdmin() {
    this.adminView = true;
  }

  toggleButtons() {
    this.adminView = false;
  }

}
