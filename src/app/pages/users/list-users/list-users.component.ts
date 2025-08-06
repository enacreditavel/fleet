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
  Math = Math;
  users: Users[] | any = [];
  currentPage = 1;
  itemsPerPage = 10;
  constructor(private service: UsersService, private router: Router) {
    this.service.getUsers().subscribe((data) => (this.users = data));
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.users.slice(start, start + this.itemsPerPage);
  }


  newUser() {
    this.router.navigate(['/users/new']);
  }

  ngOnInit() {
    initFlowbite();
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
