import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  users$: Object;
  jsonUrl = 'https://jsonplaceholder.typicode.com/users/';
  columns = ['id', 'name', 'username', 'email', 'website'];
  showHide: boolean;

  constructor(private data: DataService) {
    this.showHide = false;
  }

  ngOnInit() {
    this.data.getUsers(this.jsonUrl).subscribe(
      data => {
        this.users$ = data;
      }
    )
  }

  changeStatus() {
    console.log('on status change')
    this.showHide = !this.showHide;
    if (this.showHide)
      document.getElementById('button1').innerHTML = 'Hide';
    else
      document.getElementById('button1').innerHTML = 'Show';
  }

}
