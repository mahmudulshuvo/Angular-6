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
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            },
            website: {
                title: 'Website'
            }
        }
    };

    constructor(private data: DataService) {
    }

    ngOnInit() {
        console.log('On Settings tab')
        this.showHide = false
        this.data.getUsers(this.jsonUrl).subscribe(
            data => {
                this.users$ = data;
            }
        )
    }

    changeStatus() {
        console.log('on status change')
        this.showHide = !this.showHide;
    }
}
