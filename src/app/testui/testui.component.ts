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
  getApi = 'https://jsonplaceholder.typicode.com/users';
  postApi = 'https://jsonplaceholder.typicode.com/posts';
  files: UploadFile[] = [];
  contentArray = [];
  selectedRadio = '1';
  timeTakenLeft = '';
  timeTakenRight = '';


  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('New UI Request+log buttons gap fix');
  }

  onSubmit() {


    if (this.selectedRadio == '1') {
      let t0 = performance.now();
      this.data.getUsers(this.getApi).subscribe(
        data => {
          this.users$ = data;
          let value = JSON.stringify(this.users$, null, 2);
          // value = this.syntaxHighlight(value);
          this.leftTextArea = value;
        }
      )
      let t1 = performance.now();
      let time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;
      document.getElementById("timeLeft").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }

    if (this.selectedRadio == '2') {
      let t0 = performance.now();
      for (let i = 0; i < this.contentArray.length; i++) {
        this.data.createPost(this.postApi, this.contentArray[i]).subscribe(
          res => {
            console.log(res);
            let value = JSON.stringify(res, null, 2);
            console.log('value: ' + value)
            this.rightTextArea += value;
          },
          err => {
            console.log("Error occured");
          }
        );
      }
      let t1 = performance.now();
      let time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;
      document.getElementById("timeRight").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
    }


  }


  clearText() {
    document.getElementById("demo").innerHTML = "Clear text!"
    this.topTextArea = '';
    this.leftTextArea = '';
    this.rightTextArea = '';
    (document.getElementById("drop-zone") as HTMLInputElement).value = "";
    this.contentArray = [];
    document.getElementById("timeRight").innerHTML = "Time taken: ";
    document.getElementById("timeLeft").innerHTML = "Time taken: ";

  }


  browseFile(file) {
    this.file = file.target.files[0];

    if (this.file != undefined) {
      document.getElementById("demo").innerHTML = this.file.name;
      console.log(this.file.name);
      let reader = new FileReader();
      reader.readAsText(this.file);
      let me = this;
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
    let names = '';
    let text = '';
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        names += 'Reading -> ' + droppedFile.fileEntry.name + '\n';

        let fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
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
            this.contentArray.push(fileContents.toString());
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
