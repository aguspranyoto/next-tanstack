import { create } from "zustand";

interface useSidebarStore {
  isOpen: boolean;
  profileOpen: boolean;
  toggleSidebar: () => void;
  toggleProfile: () => void;
}

export const useSidebarStore = create<useSidebarStore>((set) => ({
  isOpen: false,
  profileOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleProfile: () => set((state) => ({ profileOpen: !state.profileOpen })),
}));
