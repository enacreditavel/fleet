import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'delete-modal',
  standalone: false,
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css',
})
export class DeleteModalComponent {
  @Input() id: string = '';
  @Input() idToDelete!: number;
  @Output() close = new EventEmitter<void>();

  constructor(private userService: UsersService) {}
  ngOnInit() {
    initFlowbite();

  }

  confirmDelete() {
    this.userService.deleteUser(this.idToDelete).subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.close.emit();
  }
}
