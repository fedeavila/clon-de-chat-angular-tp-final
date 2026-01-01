import { Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window';
import { NewChatComponent } from './components/new-chat/new-chat';

export const routes: Routes = [
  { path: '', redirectTo: '/chats', pathMatch: 'full' },
  { path: 'chats', component: ChatWindowComponent },
  { path: 'chats/:id', component: ChatWindowComponent },
  { path: 'nuevo', component: NewChatComponent }
];
