import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

// interface UploadEvent {
//   originalEvent: Event;
//   files: File[];
// }

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [InputSwitchModule, FormsModule,FileUploadModule, ToastModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  providers:[MessageService]
})
export class AdminPanelComponent {
  checked: boolean = false;

  constructor(private messageService: MessageService,private router: Router){}

  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
