import Curve from "../../curve/Curve";
import { motion } from "framer-motion";
//Store
import useThemeStore from "../../../store/ThemeStore";

export default function SectionCTA() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <section className="relative z-5 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="font-geist mt-10 text-center text-[min(6vw,30px)]"
      >
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
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-[min(8vw,15px)] flex w-171.75 max-w-[90%] items-center justify-center"
      >
        <p
          className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} text-center text-[min(4vw,18px)] transition-colors duration-300`}
        >
          Visualize your GitHub. Free, open-source, and no initial pricing
          models or subscription needed.
        </p>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        href="#"
        className="mt-7 mb-0.5 flex h-8 w-30 cursor-pointer items-center justify-center rounded-full bg-(--colorPurple) text-[min(3.7vw,16px)] font-semibold text-(--colorAsh) md:h-10 md:w-40"
      >
        <button className="cursor-pointer">Try It Now</button>
      </motion.a>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full rotate-180"
      >
        <Curve height={"md:h-[255px]"} paddingTop={"md:pt-[110px]"} />
      </motion.div>
    </section>
  );
}
