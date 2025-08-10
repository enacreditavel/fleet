import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ListUsersComponent } from './pages/users/list-users/list-users.component';
import { NewUserComponent } from './pages/users/new-user/new-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        children: [
          {
            path:'list',
            component: ListUsersComponent,

          },
          {
            path: 'new',
            component: NewUserComponent,
          },
        ]
      },
    ],
  },
  // { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'motorista/:id',
  //   component: PerfilComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
