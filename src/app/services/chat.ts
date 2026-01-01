import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.interface';
import { Message } from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats: Chat[] = [
    { id: '1', name: 'Fede', avatar: '😊', status: 'Conectado' },
    { id: '2', name: 'Flor', avatar: '😀', status: 'Desconectado' }
  ];

  messages: Message[] = [];

  getChats() {
    return this.chats;
  }

  getChatById(id: string) {
    return this.chats.find(chat => chat.id === id);
  }

  addChat(chat: Chat) {
    this.chats.push(chat);
  }

  getMessages(chatId: string) {
    return this.messages.filter(m => m.chatId === chatId);
  }

  sendMessage(chatId: string, text: string) {
    this.messages.push({
      id: Date.now().toString(),
      chatId,
      text,
      sender: 'user',
      timestamp: new Date()
    });

    setTimeout(() => {
      this.messages.push({
        id: (Date.now() + 1).toString(),
        chatId,
        text: 'Hola! Cómo va?',
        sender: 'app',
        timestamp: new Date()
      });
    }, 1000);
  }
}
