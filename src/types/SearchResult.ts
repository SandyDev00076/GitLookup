import { SearchedUser } from "./SearchedUser";

export interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: SearchedUser[];
}
