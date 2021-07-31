import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccessLevel } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {

  hasAccess(_0: AccessLevel): Observable<boolean> {
    return of(true);
  }

}
