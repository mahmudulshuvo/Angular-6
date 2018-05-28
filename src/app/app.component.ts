import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  sa = '';
  ba = '';

  copyText() {
    if (!this.sa) {
      document.getElementById("demo").innerHTML = "Please input text!"
    }
    else {
      document.getElementById("demo").innerHTML = "Copy text!"
      this.ba = this.sa;
    }
  }

  clearText() {
    document.getElementById("demo").innerHTML = "Clear text!"
    this.sa = undefined;
    this.ba = undefined;
  }

}
