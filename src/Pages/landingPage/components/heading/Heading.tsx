import useThemeStore from "../../store/ThemeStore";
import type { AboutHeadingType } from "../../types/AboutHeadingType";
import { motion } from "framer-motion";

export default function Heading({ heading, headingColor }: AboutHeadingType) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="mt-10 flex flex-col gap-4 text-start md:mt-20"
    >
      <div>
        <h2 className="font-geist text-[min(6vw,30px)]">
          <span
            className={`${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
          >
            {heading}
          </span>
          <span
            className={`${isDark ? "text-(--colorPurpleDark)" : "text-(--colorPurple)"} transition-colors duration-300`}
          >
            {headingColor}
          </span>
        </h2>
      </div>
    </motion.div>
  );
}
