import create from "zustand";

interface AppStoreType {
  searchQuery: string;
  setSearchQuery: (k: string) => void;
}

export const useAppStore = create<AppStoreType>((set) => ({
  searchQuery: "",
  setSearchQuery: (k: string) => set((state) => ({ searchQuery: k })),
}));
