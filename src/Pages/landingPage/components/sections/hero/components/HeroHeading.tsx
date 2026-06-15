import useThemeStore from "../../../../store/ThemeStore";

export default function HeroHeading() {
	const isDark = useThemeStore((state) => state.isDark);
	return (
		<div className="max-w-232 text-center flex flex-col gap-3.5 justify-center items-center">
			<h1
				className={`font-geist tracking-[-0.2%] text-[min(8vw,60px)] leading-[min(8vw,60px)] ${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
			>
				Transform Your Github Profile Into a
				<span className="text-(--colorPurple)"> Visual Masterpiece</span>
			</h1>
			<p
				className={`w-[95%] max-w-153 font-inter font-medium leading-[150%] text-[min(4vw,18px)] ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} transition-colors duration-300`}
			>
				Drop any GitHub username, URL and instantly generate a beautiful, shareable
				visualization of their repositories, languages, and contribution history.
			</p>
		</div>
	);
}
