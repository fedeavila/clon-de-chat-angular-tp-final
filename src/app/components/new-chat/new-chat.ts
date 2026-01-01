import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat';
import { Chat } from '../../models/chat.interface';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-chat.html',
  styleUrl: './new-chat.css'
})
export class NewChatComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      avatar: ['😊', Validators.required],
      status: ['online', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const newChat: Chat = {
        id: Date.now().toString(),
        name: this.form.value.name,
        avatar: this.form.value.avatar,
        status: this.form.value.status
      };

      this.chatService.addChat(newChat);
      this.router.navigate(['/chats']);
    }
  }

  cancel() {
    this.router.navigate(['/chats']);
  }
}
