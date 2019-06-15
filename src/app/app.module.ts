import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { reducers } from './reducers/reducers';
import { DmComponent } from './dm/dm.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot(reducers) ],
  declarations: [ AppComponent, HelloComponent, DmComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
