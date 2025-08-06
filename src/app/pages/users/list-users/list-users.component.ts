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
  users: Users[] | any[] = [];
  currentPage = 0;
  itemsPerPage = 10;
  totalPages = 0;
  totalElements = 0;
  pageElements = 0;

  constructor(private service: UsersService, private router: Router) {
    // this.service.getUsers(this.currentPage, this.itemsPerPage).subscribe((data) => (this.users = data));
  }

  loadUsers() {
    this.service
      .getUsers(this.currentPage, this.itemsPerPage)
      .subscribe((data) => {
        // If data is a single user, wrap it in an array
        this.users = data.content;
        this.totalPages = data.page.totalPages;
        this.totalElements = data.page.totalElements;
        this.pageElements = data.content.length;
      });
  }

  newUser() {
    this.router.navigate(['/users/new']);
  }

  ngOnInit() {
    initFlowbite();
    this.loadUsers();
  }

  goToPreviousPage() {
    if (this.currentPage > 0 && this.currentPage <= this.totalPages) {
      this.currentPage--;
      this.loadUsers(); // <-- carrega nova página
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers(); // <-- carrega nova página
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadUsers(); // <-- carrega nova página
  }

  onItemsPerPageChange() {
    this.currentPage = 0; // Reinicia a página ao mudar o tamanho
    this.loadUsers();
  }
}
