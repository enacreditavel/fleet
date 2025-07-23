import { Component } from '@angular/core';
import { RegisterService } from '../services/users.service';
import { Administrador } from '../model/users';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegComponent {
  admin: Administrador;

  constructor(private service: RegisterService, private router: Router) {
    this.admin = {
      tipo: 'ADMINISTRADOR', // Assuming a default type for the admin
      nome: '',
      cpf: '',
      email: '',
      senha: '',
    };
  }

  // Add methods and properties for the registration logic here
  // For example, you might want to handle form submission and validation

  getUser() {
    this.service.getUser().subscribe({
      next: (res) => {
        this.admin = {
          tipo: res.tipo,
          id: res.id,
          nome: res.nome,
          cpf: res.cpf,
          email: res.email,
          senha: res.senha,
        };
      },
      error: (err) => console.log('not found'),
    });
  }

  register() {
    console.log('Registering user:', this.admin);
    console.log(this.admin.email, this.admin.senha);

    this.service.register(this.admin).subscribe({
      next: (res) => {
        console.log('User registered successfully', res);
      },
      error: (err) => {
        console.error('Error registering user', err);
      },
    });

    this.router.navigate(['']);
  }

}
