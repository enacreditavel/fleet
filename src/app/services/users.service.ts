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

  postUser(Users: Users): Observable<Users> {
    return this.http.post<Users>(`${this.baseURL}/auth/register`, Users);
  }

  getUsers(page: number, size: number): Observable<PagedResponse<Users>> {
    this.admData = this.http.get<Users>(
      `${this.baseURL}/usuario?page=${page}&size=${size}`,
      {
        headers: this.headers,
      }
    );
    return this.admData;
  }

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
}
