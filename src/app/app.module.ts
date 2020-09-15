import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibModule } from '@vd/my-lib';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, MyLibModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
