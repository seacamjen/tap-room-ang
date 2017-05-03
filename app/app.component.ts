import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
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
