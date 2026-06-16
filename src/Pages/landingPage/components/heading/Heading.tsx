import useThemeStore from "../../store/ThemeStore";
import type { AboutHeadingType } from "../../types/AboutHeadingType";

export default function Heading({
  heading,
  headingColor,
}: AboutHeadingType) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <div className="mt-15 flex flex-col gap-4 text-start md:mt-20">
      <div>
        <h2 className="font-geist text-3xl">
          <span
            className={`${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
          >
            {heading}
          </span>
          <span className="text-(--colorPurple)"> {headingColor}</span>
        </h2>
      </div>
    </div>
  );
}
