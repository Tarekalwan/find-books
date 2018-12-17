import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdzBookService {

  URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  find(searchInfo: String):  Observable<any[]>{
    return this.http.get<any[]>(this.URL + searchInfo);
  }
}
