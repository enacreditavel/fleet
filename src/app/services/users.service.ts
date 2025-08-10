import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../model/users';
import { Observable } from 'rxjs';
import { PagedResponse } from '../model/pagedResponse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  private id = localStorage.getItem('userId')?.toString();

  private baseURL: string = '';
  private admData: any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }

  // Método para criar usuário
  postUser(Users: Users): Observable<Users> {
    console.log(this.headers)
    return this.http.post<Users>(
      `${this.baseURL}/auth/register`,
      Users,
      {
      headers: this.headers,
      }
    );
  }

  //Método para buscar usuários com paginação
  getUsers(page: number, size: number): Observable<PagedResponse<Users>> {
    this.admData = this.http.get<Users>(
      `${this.baseURL}/usuario?page=${page}&size=${size}`,
      {
        headers: this.headers,
      }
    );
    return this.admData;
  }

  // Método para encontrar usuário por ID
  getUserById(idTeste: number): Observable<Users> {
    if (this.id != idTeste.toString()) {
      this.id = idTeste.toString();
    }
    console.log(`Fetching user with ID (resgister Service): ${this.id}`);
    const retorno = this.http.get<Users>(
      `${this.baseURL}/motorista/${this.id}`,
      {
        headers: this.headers,
      }
    );
    console.log('User data fetched in service:', retorno);
    return retorno;
  }

  // Método para deletar usuário
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/usuario/${id}`, {
      headers: this.headers,
    });
  }
}
