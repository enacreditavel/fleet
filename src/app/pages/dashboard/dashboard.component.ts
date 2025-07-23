import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, private service: AuthService) {}




  navigateToMotoristaPerfil() {
    this.router.navigate([`motorista/${localStorage.getItem('userId')}`]);
  }
  navigateToUsuarios() {
    this.router.navigate(['usuarios'],);
  }
  logout() {
    this.service.logout();
    this.router.navigate(['']);
  }
}
