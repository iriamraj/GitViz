import useThemeStore from "../../store/ThemeStore";

export default function Curve() {
	const isDark = useThemeStore((state) => state.isDark);
	return (
		<>
			<div className="w-full h-55 pt-13 md:pt-20 flex justify-center overflow-hidden top-0">
				<div
					className={`curve rounded-[50%] w-[300%] md:w-[200%] lg:w-[180%] xl:w-[140%]  h-150 border shrink-0 border-(--colorPurple) shadow-[0_-5px_40px_#6f60b5] md:shadow-[0_-5px_80px_#6f60b5] outline-2 outline-(--colorPurple)/40 relative ${isDark ? "bg-(--colorBaseDark)" : "bg-(--colorBase)"} transition-colors duration-300`}
				></div>
			</div>
		</>
	);
}
