import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CounterStateService } from '../_states/counter-state.service';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users$!: Observable<User[]>;
  users: User[] = [];
  counter: number = 0;

  constructor(
    private us: UserService,
    private ac: ActivatedRoute,
    private cs: CounterStateService
  ) {
    this.cs.counterObservable.subscribe((value) => {
      this.counter = value;
    });
  }

  ngOnInit(): void {
    this.users$ = this.us.getUsers();
    this.users = (this.ac.snapshot.data as any).users;
  }
}
