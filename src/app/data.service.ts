import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}
