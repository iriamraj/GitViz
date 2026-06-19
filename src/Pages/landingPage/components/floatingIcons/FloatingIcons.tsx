import { motion } from "framer-motion";

// Types
import type { IconPositionType } from "../../types/IconPositionType";

// Icons
import gitIcon from "../../../../assets/icons/git-icon.svg";
import branchIcon from "../../../../assets/icons/branch-icon.svg";
import jsIcon from "../../../../assets/icons/js-icon.svg";
import reactIcon from "../../../../assets/icons/react-icon.svg";
import useThemeStore from "../../store/ThemeStore";

const iconData: IconPositionType[] = [
  {
    id: crypto.randomUUID?.() || Math.random(),
    top: "0px",
    left: "10%",
    img: gitIcon,
  },
  {
    id: crypto.randomUUID?.() || Math.random(),
    top: "0px",
    right: "10%",
    img: branchIcon,
  },
  {
    id: crypto.randomUUID?.() || Math.random(),
    top: "240px",
    right: "13%",
    img: reactIcon,
  },
  {
    id: crypto.randomUUID?.() || Math.random(),
    top: "240px",
    left: "13%",
    img: jsIcon,
  },
];

function Icon({ top, left, right, img }: IconPositionType) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{
        duration: 3,
        delay: Math.random() * 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={`absolute flex h-12 w-13 items-center justify-center rounded-2xl border border-(--colorBorder) shadow-[0_4px_5px_0px_#00000060] backdrop-blur-[3px] ${isDark && "bg-(--colorAsh)"} transition-colors duration-300`}
      style={{
        top: top,
        left: left,
        right: right,
      }}
    >
      <img src={img} alt="icons" fetchPriority="high" loading="eager" />
    </motion.div>
  );
}

export default function FloatingIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative hidden h-auto w-full lg:block"
    >
      {iconData.map((item) => (
        <Icon
          key={item.id}
          top={item.top}
          left={item.left}
          right={item.right}
          img={item.img}
        />
      ))}
    </motion.div>
  );
}
