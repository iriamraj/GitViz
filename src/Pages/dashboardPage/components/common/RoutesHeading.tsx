import type { ReactNode } from "react";

export default function RoutesHeading({ children }: { children: ReactNode }) {
	return <h2 className="text-[18px] font-medium text-(--colorTextLight)">{children}</h2>;
}
