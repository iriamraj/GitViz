import useThemeStore from "../../store/ThemeStore";
import type { DivideLineMarginType } from "../../types/DivideLineMarginType";
import { motion } from "framer-motion";

export default function SectionDivideLine({
  marginTop,
  marginBottom,
}: DivideLineMarginType) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay:0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`from-#00000000 h-0.5 w-full bg-linear-to-r ${isDark ? "via-(--colorAsh)/30" : "via-(--colorAsh)"} to-#00000000  transition-colors duration-300 ${marginTop} ${marginBottom}`}
    ></motion.div>
  );
}
