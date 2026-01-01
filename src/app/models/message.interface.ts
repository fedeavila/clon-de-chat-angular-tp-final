export interface Message {
  id: string;
  chatId: string;
  text: string;
  sender: 'user' | 'app';
  timestamp: Date;
}
