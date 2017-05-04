import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewKegComponent } from './new-keg.component';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { AbvPipe } from './abv.pipe';
import { FullnessPipe } from './fullness.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule, NoopAnimationsModule,
             MaterialModule ],
  declarations: [ AppComponent, NewKegComponent, KegListComponent, EditKegComponent, AbvPipe, FullnessPipe ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
