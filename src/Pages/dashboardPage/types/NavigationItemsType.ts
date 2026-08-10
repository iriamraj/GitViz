import type { IconType } from "react-icons/lib";

interface items {
	id: number;
	name: string;
	Icon: IconType;
	path: string;
}

export type NAvigationItemsType = items[];
