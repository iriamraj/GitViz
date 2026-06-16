import useThemeStore from "../../../../store/ThemeStore";

export default function HeroHeading() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <div className="flex max-w-232 flex-col items-center justify-center gap-5 text-center">
      <h1
        className={`font-geist text-[min(8vw,64px)] leading-[min(8vw,64px)] tracking-[-1.5%] ${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
      >
        Transform Your Github Profile Into a
        <span className="text-(--colorPurple)"> Visual Masterpiece</span>
      </h1>
      <p
        className={`font-inter tracking-[1%] font-medium w-[95%] max-w-153 text-[min(4vw,18px)] leading-[150%] ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} transition-colors duration-300`}
      >
        Drop any GitHub username, URL and instantly generate a beautiful,
        shareable visualization of their repositories, languages, and
        contribution history.
      </p>
    </div>
  );
}
