import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, finalize, of } from 'rxjs';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserPageResolver {
  constructor(private us: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    // loading start
    console.log('loading true');
    console.time('resolver');

    return this.us.getUsers().pipe(
      finalize(() => {
        console.log('loading false');
        // loading hide
        console.timeEnd('resolver');
      })
    );
  }
}
