export interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
}
