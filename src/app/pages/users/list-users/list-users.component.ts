import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Users } from '../../../model/users';
import { UsersService } from '../../../services/users.service';
import { initDropdowns, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent {
  Math = Math;
  users: Users[] | any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 10;
  totalPages: number = 0;
  totalElements: number = 0;
  pageElements: number = 0;
  deleteId!: number;
  showDeleteModal: boolean = false;

  constructor(private service: UsersService, private router: Router) {}

  ngAfterViewInit() {
    initFlowbite();
  }

  ngOnInit() {
    this.loadUsers();
  }

  // Método para carregar os usuários
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

  // Método para definir o ID do usuário a ser excluído
  deleteModal(id: number) {
    this.showDeleteModal = true;
    this.deleteId = id;
  }
  closeModal() {
    this.showDeleteModal = false;
  }

  // Navegação para a página de criação de novo usuário
  newUser() {
    this.router.navigate(['/users/new']);
  }

  // Métodos de paginação
  goToPreviousPage() {
    if (this.currentPage > 0 && this.currentPage <= this.totalPages) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  onItemsPerPageChange() {
    this.currentPage = 0; // Reinicia a página ao mudar o tamanho
    this.loadUsers();
  }
}
