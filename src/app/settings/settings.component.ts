import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    users$: Object;
    jsonUrl = 'https://jsonplaceholder.typicode.com/users/';
    columns = ['id', 'name', 'username', 'email', 'website'];
    showHide: boolean;

    settings = {
        columns: {
            SandboxName: {
                title: 'Sand box Name'
            },
            URL: {
                title: 'URL'
            },
            Login: {
                title: 'Login'
            },
            Password: {
                title: 'Password'
            }
        },

        add: {
            confirmCreate: true
        },


        edit: {
            confirmSave: true
        },


        delete: {
            confirmDelete: true
        }
    };

    constructor(private data: DataService) {
    }

    ngOnInit() {
        console.log('On Settings tab');
        this.showHide = false;

        if (this.data.globalObject === null || this.data.globalObject === undefined) {

            this.data.getJSON().subscribe(data => {
                this.users$ = data;
            });

        }
        else {
            this.users$ = this.data.globalObject;
        }
    }

    changeStatus() {
        this.showHide = !this.showHide;
    }

    onCreateConfirm(event): void {
        event.confirm.resolve(event.newData);
        this.data.globalObject = event.source.data;
    }

    onSaveConfirm(event): void {
        event.confirm.resolve(event.newData);
        this.data.globalObject = event.source.data;
    }

    onDeleteConfirm(event): void {
        event.confirm.resolve(event.source.data);
        setTimeout(() => this.data.globalObject = event.source.data, 10);
    }
}
