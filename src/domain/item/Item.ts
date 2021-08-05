import { Link } from "../link/Link";

export interface Item {
  id: number;
  title: string;
  description?: string;
  links: Link[];
}
