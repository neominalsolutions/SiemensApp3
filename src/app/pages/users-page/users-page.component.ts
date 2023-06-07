import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users$!: Observable<User[]>;
  users: User[] = [];

  constructor(private us: UserService, private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.users$ = this.us.getUsers();
    this.users = (this.ac.snapshot.data as any).users;
  }
}
