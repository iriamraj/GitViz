import Heading from "../../heading/Heading";
import IOSwindow from "./components/IOSwindow";
import Line from "./components/Line";
import PreviewBox from "./components/PreviewBox";
import { motion } from "framer-motion";

import treeImg from "../../../../../assets/images/treeImg.png";
import SectionDivideLine from "../../DivideLine/DivideLine";

//Store
import useThemeStore from "../../../store/ThemeStore";

export default function SectionAbout() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <section
      id="About"
      className="flex flex-col items-center justify-center px-5 xl:px-46"
    >
      <div className="flex w-full flex-col gap-[min(8vw,46px)]">
        <Heading heading="Everything in" headingColor="One Place"></Heading>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center justify-between md:flex-row"
        >
          <IOSwindow />
          <Line />
          <PreviewBox />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex w-full items-center justify-center"
        >
          <p
            className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)/80"} text-center text-[min(3.6vw,16px)] font-medium transition-colors duration-300`}
          >
            See all your GitHub stats laid out in a clean, interactive dashboard
            repositories, language breakdown, star count, and contribution
            activity, all at a glance. No digging through profile pages.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-[min(8vw,46px)]">
        <Heading
          heading="Your Commits as a "
          headingColor="Living Tree"
        ></Heading>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-20"
        >
          <IOSwindow />
          <div>
            <img
              src={treeImg}
              alt="tree"
              className="w-85 max-w-100 md:w-full"
              fetchPriority="low"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex w-full items-center justify-center"
        >
          <p
            className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)/80"} text-center text-[min(3.6vw,16px)] font-medium transition-colors duration-300`}
          >
            Every commit you've ever pushed, mapped out as branching paths —
            just like Git itself thinks. Trace your project's growth, spot your
            most active sprints, and see how your work has evolved over time.
          </p>
        </motion.div>
      </div>
      <SectionDivideLine
        marginTop="mt-[40px] md:mt-[80px]"
        marginBottom="md:mb-[10px]"
      />
    </section>
  );
}
