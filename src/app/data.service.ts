import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestuiComponent } from './testui/testui.component'
// import { Observable } from 'rxjs';
// import { Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { map } from "rxjs/operators";
// import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(url : string){
    return this.http.get(url)
    //return this.http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
    // .pipe(map((response: Response) => {
    //   // var result = response.json();
    //   // console.log(result);
    //   // return result;
    //   console.log(response.toString);
    //   return response;
    //  }));
  }

  createPost(url : string) {
    return this.http.post(url, {
      title: 'Test',
      body: 'Post',
      userId: 1
    })
  }

  // createPost(url : string) {
  //   this.http.post(url, {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //   })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log("Error occured");
  //       }
  //     );
  // }

}
