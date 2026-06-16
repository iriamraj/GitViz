import useThemeStore from "../../store/ThemeStore";

export default function Curve() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <>
      <div className="top-0 flex h-45 w-full justify-center overflow-hidden pt-13 md:h-55 md:pt-20">
        <div
          className={`curve relative h-150 w-[300%] shrink-0 rounded-[50%] border border-(--colorPurple) shadow-[0_-5px_40px_#6f60b5] outline-2 outline-(--colorPurple)/40 md:w-[200%] md:shadow-[0_-5px_80px_#6f60b5] lg:w-[180%] xl:w-[140%] ${isDark ? "bg-(--colorBaseDark)" : "bg-(--colorBase)"} transition-colors duration-300`}
        ></div>
      </div>
    </>
  );
}
