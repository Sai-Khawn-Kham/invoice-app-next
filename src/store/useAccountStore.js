import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccountStore = create(
  persist(
    (set) => ({
      token: null,
      account: {},
      setAccount: (account) => set({ account }),
      setToken: (token) => set({ token }),
      logout: () => set({ account: {}, token: null }),
    }),
    {
      name: "account-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAccountStore;
