import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <keg-list [childKegList]="allKegs"></keg-list>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  allKegs: Keg[] = [];

  addKeg(newKegFromChild: Keg) {
    this.allKegs.push(newKegFromChild);
  }
}
