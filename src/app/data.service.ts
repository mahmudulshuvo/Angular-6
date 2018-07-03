import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getUsers(url: string) {
        return this.http.get(url)
    }

    createPost(url: string, value: string) {
        return this.http.post(url, {
            title: 'Test',
            body: value,
            userId: 1
        })
    }

}
