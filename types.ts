export interface SpriteData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  name?: string;
  imageData?: string;
}

export interface FeedbackData {
  type: 'bug' | 'feature' | 'suggestion';
  name: string;
  email: string;
  title: string;
  description: string;
  timestamp: string;
}

export interface AppState {
  currentPage: 'landing' | 'tool' | 'feedback';
  spriteData: SpriteData[];
  selectedSprite: SpriteData | null;
}