import useThemeStore from "../../store/ThemeStore";
import type { DivideLineMarginType } from "../../types/DivideLineMarginType";

export default function SectionDivideLine({ marginTop, marginBottom }: DivideLineMarginType) {
	const isDark = useThemeStore((state) => state.isDark);
	return (
		<div
			className={`w-[80%] h-0.5 bg-linear-to-r from-#00000000 ${isDark ? "via-(--colorAsh)/30" : "via-(--colorAsh)"} to-#00000000 mt-20 transition-colors duration-300`}
			style={{
				marginTop,
				marginBottom,
			}}
		></div>
	);
}
