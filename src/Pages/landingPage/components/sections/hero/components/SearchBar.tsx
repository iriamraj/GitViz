import useThemeStore from "../../../../store/ThemeStore";

export default function SearchBar() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <div className="font-inter mt-10 flex w-[95%] max-w-185.25 flex-col items-center gap-[min(6vw,31px)] font-medium md:flex-row">
      <div className="h-[min(12vw,47px)] w-[95%] max-w-131.75 rounded-full border border-(--colorBorder) bg-(--colorBox) shadow-[0_4px_3px_1px_#00000030]">
        <input
          type="text"
          name="urlInput"
          placeholder="Enter a GitHub username or url..."
          className="h-full w-full px-5 text-[min(4vw,16px)] text-[#00000090] outline-none placeholder:text-[#00000047]"
        />
      </div>
      <button
        className={`h-[min(10vw,47px)] w-[min(33vw,162px)] cursor-pointer rounded-full text-[min(3.7vw,16px)] text-(--colorBox) shadow-[0_0_10px_5px_#6F60B530] ${isDark ? "bg-(--colorPurpleLight)" : "bg-(--colorPurple)/90"}`}
      >
        Visualize Now
      </button>
    </div>
  );
}
