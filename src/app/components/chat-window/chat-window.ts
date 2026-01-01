import { ChatService } from './../../services/chat';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Chat } from '../../models/chat.interface';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css'
})
export class ChatWindowComponent implements OnInit, OnDestroy {
  chat?: Chat;
  messages: Message[] = [];
  messageControl = new FormControl('', Validators.required);
  private interval: any;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.chat = this.chatService.getChatById(id);
        this.loadMessages(id);

        if (this.interval) {
          clearInterval(this.interval);
        }

        this.interval = setInterval(() => {
          if (id) this.loadMessages(id);
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  loadMessages(chatId: string) {
    this.messages = this.chatService.getMessages(chatId);
  }

  send() {
    if (this.messageControl.valid && this.chat) {
      const text = this.messageControl.value || '';
      this.chatService.sendMessage(this.chat.id, text);
      this.messageControl.reset();
      this.loadMessages(this.chat.id);
    }
  }
}
