import useThemeStore from "../../../../store/ThemeStore";

export default function HeroHeading() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <div className="flex max-w-232 flex-col items-center justify-center gap-5 text-center">
      <h1
        className={`font-geist text-[min(8vw,64px)] leading-[min(8vw,64px)] tracking-[-1.5%] ${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
      >
        Transform Your Github Profile Into a
        <span
          className={`${isDark ? "text-(--colorPurpleDark)" : "text-(--colorPurple)"} transition-colors duration-300`}
        >
          Visual Masterpiece
        </span>
      </h1>
      <p
        className={`font-inter w-[95%] max-w-153 text-[min(4vw,18px)] leading-[150%] font-medium tracking-[1%] ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} transition-colors duration-300`}
      >
        Drop any GitHub username, URL and instantly generate a beautiful,
        shareable visualization of their repositories, languages, and
        contribution history.
      </p>
    </div>
  );
}
