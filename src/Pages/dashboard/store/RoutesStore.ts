import { create } from "zustand";
import type { RoutesStoreType } from "../types/RouteStoreType";

export const RoutesStore = create<RoutesStoreType>((set) => ({
	currentRoute: "Dashboard",
	changeRoute: (route) => {
		set(() => ({ currentRoute: route }));
	},
}));
