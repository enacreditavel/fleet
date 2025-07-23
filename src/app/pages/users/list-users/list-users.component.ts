import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Users } from '../../../model/users';
import { UsersService } from '../../../services/users.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent {
  users: Users[] | any = [];

  constructor(private service: UsersService, private router: Router) {
    this.service.getUsers().subscribe((data) => (this.users = data));
  }

  ngOnInit() {
    initFlowbite();
  }
}
