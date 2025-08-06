import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  teste(message: string) {
    alert(message);
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
  navigateToUsers() {
    this.router.navigate(['users/list']);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
