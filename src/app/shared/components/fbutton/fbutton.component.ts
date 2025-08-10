import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fbutton',
  standalone: false,
  templateUrl: './fbutton.component.html',
  styleUrl: './fbutton.component.css',
})
export class FbuttonComponent {
  @Input() t: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
  @Input() theme: string = '';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
