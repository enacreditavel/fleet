import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbuttonComponent } from '../shared/components/fbutton/fbutton.component';
import { FinputComponent } from '../shared/components/finput/finput.component';



@NgModule({
  declarations: [FbuttonComponent, FinputComponent],
  imports: [CommonModule],
  exports: [FbuttonComponent, FinputComponent],
  providers: [],
})
export class FcomponentsModule {}
