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
        <li *ngIf="adminView"><a (click)="showKegForm()">Add Keg</a></li>
      </ul>
      <ul class="nav navbar-nav pull-right">
        <li *ngIf="!adminView"><a (click)="toggleAdmin()">Admin View</a></li>
        <li *ngIf="adminView"><a (click)="toggleButtons()">Customer View</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div *ngIf="adminView" class="row">
      <div class="col-md-6">
        <new-keg [kegFormShow]="viewKegForm" (newKegSender)="addKeg($event)"></new-keg>
      </div>
      <div class="col-md-6">
        <edit-keg [kegToEdit]="selectedKeg" (editSender)="finishedEditing()"></edit-keg>
      </div>
    </div>
    <div>
    </div>
    <keg-list [childKegList]="allKegs" [admin]="adminView" (kegToEditSender)="editKeg($event)"></keg-list>
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
  viewKegForm = false;
  selectedKeg = null;

  addKeg(newKegFromChild: Keg) {
    this.allKegs.push(newKegFromChild);
    this.viewKegForm = false;
  }

  editKeg(clickedKeg) {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    console.log(this.selectedKeg);
  }

  finishedEditing() {
    this.selectedKeg = null;
    // editView = false;
  }

  showKegForm() {
    this.viewKegForm = true;
  }

  toggleAdmin() {
    this.adminView = true;
  }

  toggleButtons() {
    this.adminView = false;
  }

}
