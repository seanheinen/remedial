import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models';

@Injectable({providedIn: 'root'})
export class UserService {

  getUser(): Observable<User> {
    return from([
      { username: 'seanheinen', firstName: 'sean', lastName: 'heinen' },
      { username: 'corinadumitrescu', firstName: 'corina', lastName: 'dumitrscu' },
    ]).pipe(
      delay(2000)
    );
  }

}
