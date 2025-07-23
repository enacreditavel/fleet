import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage = '';
  showErrorModal = false;
  errorCode = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // exibe mensagens de erro
      return;
    }
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorCode = err.error.status;
        this.errorMessage = err.error.message;

        this.showErrorModal = true;
      },
    });

    // Limpa os campos do formulário
    this.loginForm.reset();
  }

  goToRegisterPassanger() {
    this.router.navigate(['register/passager']);
  }

  closeModal() {
    this.showErrorModal = false;
  }
}
