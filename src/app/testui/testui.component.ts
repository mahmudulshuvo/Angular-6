import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testui',
  templateUrl: './testui.component.html',
  styleUrls: ['./testui.component.css']
})
export class TestuiComponent implements OnInit {
  title = 'Angular';
  sa = '';
  ba = '';
  file: File;

  constructor() { }

  ngOnInit() {
  }

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

  browseText(file) {
    this.file = file.target.files[0];
    
    if(this.file != undefined) {
      document.getElementById("demo").innerHTML = this.file.name;
      console.log(this.file.name);
      var reader = new FileReader();
      reader.readAsText(this.file);
      var me = this;
      reader.onload = function () {
        me.sa = reader.result;
      }
      file.target.value = '';
    }

   else {
    document.getElementById("demo").innerHTML = "undefined file";
    console.log(this.file.name);
   } 

  }

}
