import { create } from "zustand";

type LayoutStore = {
  collapsed: boolean;
  mobileOpen: boolean;

  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const useLayoutStore = create<LayoutStore>((set) => ({
  collapsed: false,
  mobileOpen: false,

  toggleSidebar: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),

  openSidebar: () =>
    set({
      mobileOpen: true,
    }),

  closeSidebar: () =>
    set({
      mobileOpen: false,
    }),
}));
