import { create } from "zustand";
import { databases } from "@/appwrite";

interface BoardState {
  board: Board;
  getBoard: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: null,
  getBoard: () => {},
}));
