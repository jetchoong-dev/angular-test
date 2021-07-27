import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(res => {
        const users = res.map(user => ({
          ...user,
          fullAddress: `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
        }));
        return users;
      }),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }
}
