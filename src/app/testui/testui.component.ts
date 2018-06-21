import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { UploadEvent, UploadFile, FileSystemEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-testui',
  templateUrl: './testui.component.html',
  styleUrls: ['./testui.component.css']
})
export class TestuiComponent implements OnInit {
  title = 'Angular';
  topTextArea = '';
  leftTextArea = '';
  rightTextArea = '';
  file: File;
  users$: Object;
  jsonUrl = 'https://jsonplaceholder.typicode.com/users'; //public api for tesing json
  leftUrl = 'https://jsonplaceholder.typicode.com/users';
  rightUrl = 'https://jsonplaceholder.typicode.com/posts';
  post = 'https://jsonplaceholder.typicode.com/posts';
  public files: UploadFile[] = [];
  postString = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('Replay');
  }

  onSubmit() {

    var leftCheckBox = <HTMLInputElement>document.getElementById("leftCheckbox");
    var rightCheckBox = <HTMLInputElement>document.getElementById("rightCheckBox");

    if (leftCheckBox.checked) {
      var t0 = performance.now();
      this.data.getUsers(this.leftUrl).subscribe(
        data => {
          this.users$ = data;
          var value = JSON.stringify(this.users$, null, 2);
          // value = this.syntaxHighlight(value);
          this.leftTextArea = value;
        }
      )
      var t1 = performance.now();
      var time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;

      //console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
      document.getElementById("timeLeft").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }

    if (rightCheckBox.checked) {
      var t0 = performance.now();
      this.data.getUsers(this.rightUrl).subscribe(
        data => {
          this.users$ = data;
          var value = JSON.stringify(this.users$, null, 2);
          // value = this.syntaxHighlight(value);
          this.rightTextArea = value;
        }
      )
      var t1 = performance.now();
      var time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;
      //console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
      document.getElementById("timeRight").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }

    for (var i = 0; i < this.postString.length; i++) {
      this.data.createPost(this.post, this.postString[i]).subscribe(
        res => {
          console.log(res);
          var value = JSON.stringify(res, null, 2);
          console.log('value: ' + value)
          // value = this.syntaxHighlight(value);
          //var text = ((document.getElementById("rightTextArea") as HTMLInputElement).value);
          //text += value;
          this.rightTextArea += value;
        },
        err => {
          console.log("Error occured");
        }
      );
    }
    //this.ca = this.postString;
    // this.data.createPost(this.post,'Post').subscribe(
    //   res => {
    //     console.log(res);
    //     var value = JSON.stringify(res,null,2);
    //     // value = this.syntaxHighlight(value);
    //     this.ca = value;
    //   },
    //   err => {
    //     console.log("Error occured");
    //   }
    // );
  }

  onClickLeft(e) {
    if (e.target.checked) {

    }
    console.log("left checkbox checked")
    if (this.leftTextArea == '') {
      this.data.getUsers(this.leftUrl).subscribe(
        data => {
          this.users$ = data;
          var value = JSON.stringify(this.users$, null, 2);
          // value = this.syntaxHighlight(value);
          this.leftTextArea = value;
        }
      )
    }
    else {
      this.leftTextArea = '';
    }

  }

  onClickRight() {
    console.log("right checkbox checked")
    if (this.rightTextArea == '') {
      this.data.getUsers(this.rightUrl).subscribe(
        data => {
          this.users$ = data;
          var value = JSON.stringify(this.users$, null, 2);
          // value = this.syntaxHighlight(value);
          this.rightTextArea = value;
        }
      )
    }
    else {
      this.rightTextArea = '';
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
    if (!this.topTextArea) {
      document.getElementById("demo").innerHTML = "Please input text!"
    }
    else {
      document.getElementById("demo").innerHTML = "Copy text!"
      this.leftTextArea = this.topTextArea;
    }
  }

  clearText() {
    document.getElementById("demo").innerHTML = "Clear text!"
    this.topTextArea = '';
    this.leftTextArea = '';
    this.rightTextArea = '';
    (document.getElementById("drop-zone") as HTMLInputElement).value = "";
    this.postString = [];

  }


  browseText(file) {
    this.file = file.target.files[0];

    if (this.file != undefined) {
      document.getElementById("demo").innerHTML = this.file.name;
      console.log(this.file.name);
      var reader = new FileReader();
      reader.readAsText(this.file);
      var me = this;
      reader.onload = function () {
        me.topTextArea = reader.result;
      }
      file.target.value = '';
    }

    else {
      document.getElementById("demo").innerHTML = "undefined file";
      console.log(this.file.name);
    }

  }


  public dropped(event: UploadEvent) {
    //console.log('Enter into file drop event');
    this.files = event.files;
    // var i = 0;
    var names = '';
    var text = '';
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        //console.log('Enter into if statement event');
        // UploadFile[i] = droppedFile.fileEntry.name;
        names += 'Reading -> ' + droppedFile.fileEntry.name + '\n';
        //i++;

        var fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file(async (file: File) => {

          const readUploadedFileAsText = (inputFile) => {
            const temporaryFileReader = new FileReader();

            return new Promise((resolve, reject) => {
              temporaryFileReader.onerror = () => {
                temporaryFileReader.abort();
                reject(new DOMException("Problem parsing input file."));
              };

              temporaryFileReader.onload = () => {
                resolve(temporaryFileReader.result);
              };
              temporaryFileReader.readAsText(inputFile);
            });
          };

          try {
            console.log('passing files');
            const fileContents = await readUploadedFileAsText(file)
            //console.log('file content: '+fileContents);
            this.postString.push(fileContents.toString());
            fileEntry = null;
          } catch (e) {
            console.warn('error: ' + e.message)
          }

          // console.log('assigning files');


          // Here you can access the real file
          // console.log(droppedFile.relativePath, file);
          // var reader = new FileReader();
          // reader.readAsText(file);
          // reader.onload = function () {
          //   text += reader.result+'\n';
          //   document.getElementById("rightTextArea").textContent += reader.result;
          //   document.getElementById("demo").innerHTML = 'Testing';
          //   console.log('Output: '+text);
          // }

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });


      } else {
        // It was a directory (empty directories are added, otherwise only files)
        console.log('Enter into else statement event');
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
      // if (text.isEmpty()) {
      // }
      //this.ca = text;
    }
    // for (i =0;i<16;i++) {
    //   console.log('Upload files path: '+UploadFile[i]);
    // }
    //console.log('Print file names: '+names);
    console.log('Test print here: ' + text);
    this.topTextArea = names;

  }

  public fileOver(event) {
    console.log(event);
    event.files = null;
    this.files = [];
    (document.getElementById("drop-zone") as HTMLInputElement).value = "";
    //console.log('Text Over '+text);
  }

  public fileLeave(event) {
    event.files = null;
    //console.log('Text leave '+text);
    this.files = [];
    (document.getElementById("drop-zone") as HTMLInputElement).value = "";
    console.log(event);
  }

}
