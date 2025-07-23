import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroModalComponent } from '../shared/layouts/erro-modal/erro-modal.component';
import { NavbarComponent } from '../shared/layouts/navbar/navbar.component';
import { SidebarComponent } from '../shared/layouts/sidebar/sidebar.component';
import { FcomponentsModule } from './fcomponents.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ErroModalComponent,
  ],
  imports: [
    CommonModule,
    FcomponentsModule

  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ErroModalComponent
  ],
  providers: [],
  bootstrap: []
})
export class LayoutsModule {}
