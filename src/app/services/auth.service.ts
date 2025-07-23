import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  login(email: string, senha: string) {
    return this.http
      .post<{ id: number; token: string; userName: string }>(
        `${this.baseURL}auth/login`,
        {
          email,
          senha,
        }
      )
      .pipe(
        tap((response) => {
          // Aqui armazena o token e o id no localStorage
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('userId', response.id.toString());
          sessionStorage.setItem('userName', response.userName);
        })
      );

  }

  logout() {
    sessionStorage.clear();
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token; // true se tiver token
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

}


