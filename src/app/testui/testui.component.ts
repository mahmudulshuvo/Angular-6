import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

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
  users$: Object;
  jsonUrl = 'http://jsonplaceholder.typicode.com/users'; //public api for tesing json

  constructor(private data: DataService) { }

  ngOnInit() {}

  onSubmit() {
    this.data.getUsers(this.jsonUrl).subscribe(
      data => {
        this.users$ = data ;
        var value = JSON.stringify(this.users$);
        this.ba = value;
       }
    )
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
