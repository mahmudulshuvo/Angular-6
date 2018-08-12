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
    getApi = 'https://jsonplaceholder.typicode.com/users';
    postApi = 'https://jsonplaceholder.typicode.com/posts';
    files: UploadFile[] = [];
    contentArray = [];
    selectedRadio = '1';
    timeTakenLeft = '';
    timeTakenRight = '';


    constructor(private data: DataService) { }

    ngOnInit() {
        console.log('Experiment editable-table');
    }

    onSubmit() {

        if (this.selectedRadio == '1') {
            let t0 = performance.now();
            this.data.getUsers(this.getApi).subscribe(
                data => {
                    this.users$ = data;
                    let value = JSON.stringify(this.users$, null, 2);
                    this.leftTextArea = value;
                }
            )
            let t1 = performance.now();
            let time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;
            document.getElementById("timeLeft").innerHTML = "Time taken: " + time.toFixed(2) + " ms.";
        }

        if (this.selectedRadio == '2') {
            let t0 = performance.now();
            this.data.createPost(this.postApi, this.topTextArea).subscribe(
                res => {
                    let value = JSON.stringify(res, null, 2);
                    this.rightTextArea += value;
                },
                err => {
                    console.log("Error occured");
                }
            );
            let t1 = performance.now();
            let time = parseFloat((Math.ceil(t1 - t0) * 100).toString()) / 100;
            document.getElementById("timeRight").innerHTML = "Time taken: " + time.toFixed(2) + " ms."
        }
    }

    clearText() {
        document.getElementById("demo").innerHTML = "Clear text!";
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
        console.log('file path: ' + file.target.value)

        if (this.file != undefined) {
            document.getElementById("demo").innerHTML = this.file.name + ' content:';
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

}
