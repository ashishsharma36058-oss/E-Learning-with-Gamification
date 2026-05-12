import { create } from "zustand";
import api from "../api/client";

const saveUser = (user) => {
  if (user) {
    localStorage.setItem("g_user", JSON.stringify(user));
  }
};

const useStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("g_user") || "null"),
  isLoggedIn: !!localStorage.getItem("g_access"),

  setUser: (user) => {
    saveUser(user);
    set({ user, isLoggedIn: !!user });
  },

  logout: () => {
    localStorage.removeItem("g_access");
    localStorage.removeItem("g_refresh");
    localStorage.removeItem("g_user");
    set({ user: null, isLoggedIn: false });
  },

  fetchMe: async () => {
    try {
      const { data } = await api.get("/progress/me");
      saveUser(data);
      set({ user: data, isLoggedIn: true });
    } catch {
      get().logout();
    }
  },

  addXP: (amount = 0) => {
    const currentUser = get().user;

    if (!currentUser) return;

    const oldXp = currentUser.xp || 0;
    const oldTotalXp = currentUser.total_xp || 0;
    const oldLevel = currentUser.level || 1;

    const nextXp = oldXp + amount;
    const levelUpAt = 300;

    const leveledUp = nextXp >= levelUpAt;

    const updatedUser = {
      ...currentUser,
      xp: leveledUp ? nextXp - levelUpAt : nextXp,
      total_xp: oldTotalXp + amount,
      level: leveledUp ? oldLevel + 1 : oldLevel,
      completed_challenges: (currentUser.completed_challenges || 0) + 1,
    };

    saveUser(updatedUser);
    set({ user: updatedUser });
  },
}));

export default useStore;
