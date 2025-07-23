import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from '../../model/users';
import { RegisterService } from '../../services/users.service';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-perfil',
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent {
  idTeste: number = 0;
  user= new MatTableDataSource<Administrador>();
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'tipo'];

  constructor(
    private service: RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idTeste = Number(params.get('id'));
    });
    console.log(`Fetching user with ID (perfil component): ${this.idTeste}`);
    this.service.getUserById(this.idTeste).subscribe(data => { this.user.data = [data]});
    // this.service.getUser().subscribe((data) => (this.user = data));
    console.log('User data fetched:', this.user);
  }

  addUser() {
    this.router.navigate(['add']);
  }
}
