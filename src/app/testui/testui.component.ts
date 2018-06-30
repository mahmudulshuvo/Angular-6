import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { UploadEvent, UploadFile, FileSystemEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  selectedRadio = '1';


  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('New UI');
  }

  onSubmit() {


    if (this.selectedRadio == '1') {
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
      document.getElementById("timeLeft").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }

    if (this.selectedRadio == '2') {
      var t0 = performance.now();
      for (var i = 0; i < this.postString.length; i++) {
        this.data.createPost(this.post, this.postString[i]).subscribe(
          res => {
            console.log(res);
            var value = JSON.stringify(res, null, 2);
            console.log('value: ' + value)
            this.rightTextArea += value;
          },
          err => {
            console.log("Error occured");
          }
        );
      }
      var t1 = performance.now();
      var time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;
      document.getElementById("timeRight").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
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
    document.getElementById("timeRight").innerHTML = "Time taken: ";
    document.getElementById("timeLeft").innerHTML = "Time taken: ";

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

    this.files = event.files;
    var names = '';
    var text = '';
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        names += 'Reading -> ' + droppedFile.fileEntry.name + '\n';

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
            this.postString.push(fileContents.toString());
            fileEntry = null;
          } catch (e) {
            console.warn('error: ' + e.message)
          }

        });


      } else {
        // It was a directory (empty directories are added, otherwise only files)
        console.log('Enter into else statement event');
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    console.log('Test print here: ' + text);
    this.topTextArea = names;

  }

  public fileOver(event) {
    console.log(event);
    event.files = null;
    this.files = [];
    (document.getElementById("drop-zone") as HTMLInputElement).value = "";
  }

  public fileLeave(event) {
    event.files = null;
    this.files = [];
    (document.getElementById("drop-zone") as HTMLInputElement).value = "";
    console.log(event);
  }

}
