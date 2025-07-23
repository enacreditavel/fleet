import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule  } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-users',
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: Users[] | any;
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'tipo'];

  constructor(private service: UsersService, private router: Router) {
    this.service.getUsers().subscribe((data) => (this.users = data));
  }

  addUser() {
    this.router.navigate(['add']);
  }
}
