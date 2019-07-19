export interface Article {
  id?: number;
  title: string;
  description?: string;
  state: "completed" | "cancelled" | "in progress" | null;
  publishDate?: Date;
  author: "Tomasz Świątek" | "Katarzyna Blaszka" | string;
}
