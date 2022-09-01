import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPopup = false;

  popupClosed(event) {
    console.log(event);
    this.showPopup = false;
  }
}
