import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    globalObject: Object;

    constructor(private http: HttpClient) { }

    getUsers(url: string) {
        return this.http.get(url);
    }

    createPost(url: string, value: string) {
        return this.http.post(url, {
            title: 'Test',
            body: value,
            userId: 1
        })
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/file.json");
    }

}
