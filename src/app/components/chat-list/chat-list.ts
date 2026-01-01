import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat';
import { Chat } from '../../models/chat.interface';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css'
})
export class ChatListComponent implements OnInit {
  chats: Chat[] = [];

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    this.chats = this.chatService.getChats();
  }

  openChat(id: string) {
    this.router.navigate(['/chats', id]);
  }

  createNew() {
    this.router.navigate(['/nuevo']);
  }
}
