import { motion } from "framer-motion";
import useThemeStore from "../../../../store/ThemeStore";

export default function HeroHeading() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <div className="flex max-w-232 flex-col items-center justify-center gap-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`font-geist text-[min(8vw,64px)] leading-[min(8vw,64px)] tracking-[-1.5%] ${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
      >
        Transform Your Github Profile Into a
        <span
          className={`${isDark ? "text-(--colorPurpleDark)" : "text-(--colorPurple)"} transition-colors duration-300`}
        >
          Visual Masterpiece
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`font-inter w-[90%] max-w-153 text-[min(3.5vw,18px)] leading-[150%] font-medium tracking-[1%] ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} transition-colors duration-300`}
      >
        Drop any GitHub username, URL and instantly generate a beautiful,
        shareable visualization of their repositories, languages, and
        contribution history.
      </motion.p>
    </div>
  );
}
