import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FcomponentsModule } from './fcomponents.module';
import { LayoutsModule } from './layouts.module';
import { ListUsersComponent } from '../pages/users/list-users/list-users.component';
import { NewUserComponent } from '../pages/users/new-user/new-user.component';



@NgModule({
  declarations: [
    DashboardComponent,

    LoginComponent,
    RegisterComponent,

    ListUsersComponent,
    NewUserComponent

  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    LayoutsModule,
    FcomponentsModule,

  ],
  exports: [
    DashboardComponent,

    LoginComponent,
    RegisterComponent,

    ListUsersComponent,
    NewUserComponent
  ],
})
export class PagesModule {}
