import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from '../test/test.component';
import { FirstComponent } from './first/first.component';
import { CeoComponent } from './ceo/ceo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, FirstComponent, CeoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
