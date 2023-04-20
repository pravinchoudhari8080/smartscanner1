import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { users } from '../allinterface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<users>;
  public apiURL_:string =  "";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<users>(JSON.parse(sessionStorage.getItem('logUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.apiURL_ = environment.API_URL;
   }
   public get currentUserValue(): users {
    return this.currentUserSubject.value;
  }
  login(obj:users) {
    sessionStorage.setItem('logUser',  JSON.stringify(obj));
    sessionStorage.setItem('loginId', String(obj.id));
    sessionStorage.setItem('name', obj.name);
    this.currentUserSubject.next(obj);
    return obj;
  }
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('logUser');
    this.currentUserSubject.next(null);
  }
}
