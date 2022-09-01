import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PopupWindowComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
