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
  ca = '';
  file: File;
  users$: Object;
  jsonUrl = 'https://jsonplaceholder.typicode.com/users'; //public api for tesing json
  leftUrl = 'https://jsonplaceholder.typicode.com/users';
  rightUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('Font Changes');
  }

  onSubmit() {
   
    var leftCheckBox = <HTMLInputElement> document.getElementById("leftCheckbox");
    var rightCheckBox =  <HTMLInputElement> document.getElementById("rightCheckBox");
    
    if(leftCheckBox.checked) {
      var t0 = performance.now();
      this.data.getUsers(this.leftUrl).subscribe(
        data => {
          this.users$ = data ;
          var value = JSON.stringify(this.users$,null,2);
          // value = this.syntaxHighlight(value);
          this.ba = value;
         }
        )
        var t1 = performance.now();
        var time = parseFloat((Math.ceil(t1-t0) * 100).toString()) / 100;
        
        //console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
        document.getElementById("timeLeft").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }

    if(rightCheckBox.checked) {
      var t0 = performance.now();
      this.data.getUsers(this.rightUrl).subscribe(
        data => {
          this.users$ = data ;
          var value = JSON.stringify(this.users$,null,2);
          // value = this.syntaxHighlight(value);
          this.ca = value;
         }
        )
        var t1 = performance.now();
        var time = parseFloat((Math.ceil(t1-t0) * 100).toString()) / 100;
        //console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
        document.getElementById("timeRight").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }
  }

  onClickLeft(e) {
    if(e.target.checked) {

    }
    console.log("left checkbox checked")
    if (this.ba == '') {
      this.data.getUsers(this.leftUrl).subscribe(
        data => {
          this.users$ = data ;
          var value = JSON.stringify(this.users$,null,2);
          // value = this.syntaxHighlight(value);
          this.ba = value;
         }
      )
    }
    else {
      this.ba = '';
    }

  }

  onClickRight() {
    console.log("right checkbox checked")
    if (this.ca == '') {
      this.data.getUsers(this.rightUrl).subscribe(
        data => {
          this.users$ = data ;
          var value = JSON.stringify(this.users$,null,2);
          // value = this.syntaxHighlight(value);
          this.ca = value;
         }
      )
    }
    else {
      this.ca = '';
    }
  }

  syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
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
    this.sa = '';
    this.ba = '';
    this.ca = '';
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
