import { Author } from "../author/Author";
import { Category } from "../category/Category";
import { Item } from "../item/Item";

export interface Roadmap {
  id: string;
  title: string;
  items: Item[];
  category: Category;
  tags: string[];
  likes: number;
  author: Author;
  updatedAt: Date;
}
