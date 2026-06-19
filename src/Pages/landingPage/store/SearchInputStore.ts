import { create } from "zustand";
import type { SearchInputType } from "../types/SearchInputType";

export const SearchInputStore = create<SearchInputType>((set) => ({
  searchInput: "",
  setSearchInput: (input) => set(() => ({ searchInput: input })),
}));
