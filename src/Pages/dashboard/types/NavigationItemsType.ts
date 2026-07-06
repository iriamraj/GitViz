import type { IconType } from "react-icons/lib";

interface items {
	id: number;
	name: string;
	Icon: IconType;
}

export type NAvigationItemsType = items[];
