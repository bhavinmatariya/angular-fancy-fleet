import { Component, EventEmitter, Output } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-delete-confirm-modal',
  standalone: true,
  templateUrl: './delete-confirm-modal.component.html',
  styleUrl: './delete-confirm-modal.component.scss'
})
export class DeleteConfirmModalComponent {

  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();
  constructor(public dialogService: DialogService){}

}
