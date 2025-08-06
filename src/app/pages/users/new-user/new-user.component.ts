import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-new-user',
  standalone: false,
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  createForm!: FormGroup;
  errorMessage = '';
  showErrorModal = false;
  errorCode = 0;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private fb: FormBuilder
  ) {
    initFlowbite();
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      tipo: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required, Validators.pattern(/^\d{11}$/)],
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  get tipo() {
    return this.createForm.get('tipo')?.value;
  }

  create() {
    alert('Form submitted:' + JSON.stringify(this.createForm.value));

    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched(); // exibe mensagens de erro
      this.errorMessage = 'Please fill in all required fields.';
      this.showErrorModal = true;
      return;
    }

    this.usersService.postUser(this.createForm.value).subscribe({
      next: (res) => {
        console.log('User created successfuly:', res);
        this.router.navigate(['users/list']);
      },
      error: (err) => {
        console.error('Error to create user:', err);
        this.errorCode = err.error.status;
        this.errorMessage = err.error.message;

        this.showErrorModal = true;
      },
    });
  }
  closeModal() {
    this.showErrorModal = false;
  }

  onTipoUsuarioChange() {
    // Remove o campo dinâmico anterior (se existir)
    ['cargo', 'cnh', 'contato'].forEach((campo) => {
      if (this.createForm.contains(campo)) {
        this.createForm.removeControl(campo);
      }
    });

    // Adiciona o campo específico
    if (this.createForm.get('tipo')?.value === 'ADMINISTRADOR') {
      this.createForm.addControl(
        'cargo',
        this.fb.control('', Validators.required)
      );
    } else if (this.createForm.get('tipo')?.value === 'MOTORISTA') {
      this.createForm.addControl(
        'cnh',
        this.fb.control('', Validators.required)
      );
    } else if (this.createForm.get('tipo')?.value === 'PASSAGEIRO') {
      this.createForm.addControl(
        'contato',
        this.fb.control('', Validators.required)
      );
    }
  }

  cancel() {
    this.router.navigate(['users/list']);
  }
}
