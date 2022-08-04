import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false
  redirectUrl!: string

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    // promise
    // const promise = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       login: 'admin',
    //       password: '123145151'
    //     })
    //   }, 1000);
    // })

    // return promise.then((res: any) => {
    //   return 
    // })

    const observable = of({login: 'admin', password: '123145151'}).pipe(delay(1000))

    return observable.pipe
    (map((res) => login === res.login && password === res.password ? this.isLoggedIn = true : false))
  } 

  logout() {
    this.isLoggedIn = false
  }
}
