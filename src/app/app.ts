import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}
