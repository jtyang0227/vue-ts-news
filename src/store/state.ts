import { NewsItem } from "@/api";

const state = {
  news: [] as NewsItem[],
  // ask: [] as NewsItem[]
  // jobs: [] as NewsItem[]
};

type RootState = typeof state;

export { state, RootState };