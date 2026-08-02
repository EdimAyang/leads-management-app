import { create } from "zustand";

type LayoutStore = {
  collapsed: boolean;
  mobileOpen: boolean;

  toggleSidebar: () => void;
  setCollapsed: (value: boolean) => void;

  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  toggleMobileSidebar: () => void;
};

export const useLayoutStore = create<LayoutStore>((set) => ({
  collapsed: false,
  mobileOpen: false,

  toggleSidebar: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),
    

  setCollapsed: (value) =>
    set({
      collapsed: value,
    }),

  openMobileSidebar: () =>
    set({
      mobileOpen: true,
    }),

  closeMobileSidebar: () =>
    set({
      mobileOpen: false,
    }),

  toggleMobileSidebar: () =>
    set((state) => ({
      mobileOpen: !state.mobileOpen,
    })),
}));
