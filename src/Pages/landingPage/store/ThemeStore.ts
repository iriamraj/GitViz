import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeStoreType } from "../types/ThemeStoreType";

const useThemeStore = create<ThemeStoreType>()(
	persist(
		(set) => ({
			isDark: true,
			switchTheme: () =>
				set((state) => ({
					isDark: !state.isDark,
				})),
		}),
		{ name: "Theme" },
	),
);

export default useThemeStore;
