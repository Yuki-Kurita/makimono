export default interface RoadmapResponse {
  id: number;
  title: string;
  item: Item[];
  publisher: string;
  publishedAt: string;
  like: number;
  category: string;
}
export interface Item {
  link: string;
  comment: string;
  order: number;
}
