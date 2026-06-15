import useThemeStore from "../../store/ThemeStore";
import type { AboutHeadingType } from "../../types/AboutHeadingType";

export default function Heading({ heading, headingColor, children }: AboutHeadingType) {
	const isDark = useThemeStore((state) => state.isDark);
	return (
		<div className="text-center flex flex-col gap-4 mt-15 md:mt-20">
			<div>
				<h2 className="text-3xl font-geist">
					<span
						className={`${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
					>
						{heading}
					</span>
					<span className="text-(--colorPurple)"> {headingColor}</span>
				</h2>
			</div>

			<p
				className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} transition-colors duration-300`}
			>
				{children}
			</p>
		</div>
	);
}
