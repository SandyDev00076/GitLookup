import { Repo } from "./Repo";

export interface ReposRequest {
  repos: Repo[];
  nextPageIndex: number | null;
}
