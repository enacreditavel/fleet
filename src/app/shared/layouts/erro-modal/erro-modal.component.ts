import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'erro-modal',
  standalone: false,
  templateUrl: './erro-modal.component.html',
  styleUrl: './erro-modal.component.css',
})
export class ErroModalComponent {
  @Input() errorCode!: number;
  @Input() errorMessage!: string;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
