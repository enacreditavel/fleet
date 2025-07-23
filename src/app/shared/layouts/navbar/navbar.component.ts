import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  user = sessionStorage.getItem('userName');
  constructor(private router: Router) {}

  home() {
    this.router.navigate(['dashboard']);
  }
  logout() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('token');
    this.router.navigate(['logout']);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
