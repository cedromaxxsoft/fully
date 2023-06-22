import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User {
  createdAt: string,
  name: string,
  avatar: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  url: string = "https://649090681e6aa71680cb79f3.mockapi.io/users"

  constructor(private http: HttpClient) {
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
}
