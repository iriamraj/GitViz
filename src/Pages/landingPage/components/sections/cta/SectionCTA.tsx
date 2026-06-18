import Curve from "../../curve/Curve";

//Store
import useThemeStore from "../../../store/ThemeStore";

export default function SectionCTA() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-geist mt-15 text-center text-3xl">
        <span
          className={`${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
        >
          Ready to
        </span>
        <span
          className={`${isDark ? "text-(--colorPurpleDark)" : "text-(--colorPurple)"} transition-colors duration-300`}
        >
          Visualize Your GitHub?
        </span>
      </h2>
      <div className="mt-[min(8vw,15px)] flex w-171.75 max-w-[90%] items-center justify-center">
        <p
          className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} text-center text-[18px] transition-colors duration-300`}
        >
          Visualize your GitHub. Free, open-source, and no initial pricing
          models or subscription needed.
        </p>
      </div>

      <a
        href="#"
        className="mt-7 mb-0.5 h-10 w-40 cursor-pointer rounded-full bg-(--colorPurple) text-(--colorAsh) flex items-center justify-center"
      >
        <button>Try It Now</button>
      </a>
      <div className="w-full rotate-180">
        <Curve height={60} paddingTop={25}/>
      </div>
    </section>
  );
}
