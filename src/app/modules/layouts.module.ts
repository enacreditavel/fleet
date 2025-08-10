import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroModalComponent } from '../shared/layouts/erro-modal/erro-modal.component';
import { NavbarComponent } from '../shared/layouts/navbar/navbar.component';
import { SidebarComponent } from '../shared/layouts/sidebar/sidebar.component';
import { FcomponentsModule } from './fcomponents.module';
import { DeleteModalComponent } from '../shared/layouts/delete-modal/delete-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ErroModalComponent,
    DeleteModalComponent,
  ],
  imports: [CommonModule, FcomponentsModule],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ErroModalComponent,
    DeleteModalComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class LayoutsModule {}
