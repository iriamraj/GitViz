import type { CardUsageType } from "../../../types/CardUsageType";
import Card from "../../card/Card";
import SectionDivideLine from "../../DivideLine/DivideLine";
import Heading from "../../heading/Heading";
import { motion } from "framer-motion";
//Store
import useThemeStore from "../../../store/ThemeStore";

export default function SectionUsage() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <section id="Usage" className="flex flex-col px-5 xl:px-46">
      <Heading heading="How It " headingColor="Works"></Heading>
      <div className="mt-6 flex flex-col flex-wrap items-center justify-center gap-[min(6vw,38px)] md:flex-row">
        <CardUsage
          id="01"
          title="Enter a Username"
          description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
          delay={0}
        />
        <CardUsage
          id="02"
          title="We Parse the Data"
          description="Our tool fetches repos, languages, commit history, and star counts via the GitHub public API — no login needed."
          delay={0.2}
        />
        <CardUsage
          id="03"
          title="Get Your Visual"
          description="Instantly get an interactive, shareable visualization you can screenshot, link, or embed anywhere you like."
          delay={0.4}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-[min(8vw,40px)] flex w-full items-center justify-center"
      >
        <p
          className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)/80"} text-center text-[min(3.6vw,16px)] font-medium transition-colors duration-300`}
        >
          Every commit you've ever pushed, mapped out as branching paths — just
          like Git itself thinks. Trace your project's growth, spot your most
          active sprints, and see how your work has evolved over time.
        </p>
      </motion.div>
      <SectionDivideLine
        marginTop="mt-[40px] md:mt-[80px]"
        marginBottom="md:mb-[10px]"
      />
    </section>
  );
}

function CardUsage({ id, title, description, delay }: CardUsageType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-90% flex flex-col items-start gap-4 md:gap-6"
    >
      <div className="ml-3 flex h-9 w-9 rotate-45 items-center justify-center rounded-xl bg-(--colorPurple) text-[20px] font-bold text-(--colorAsh) md:h-11 md:w-11 md:text-2xl">
        <div className="-rotate-45">{id}</div>
      </div>
      <Card
        borderRadius="rounded-[18px] md:rounded-[24px]"
        width="w-fit md:w-[355px]"
        height="fit"
      >
        <div className="flex h-full w-full flex-col gap-1 p-3">
          <h3 className="font-geist text-[min(4.2vw,17px)] text-(--colorText)">
            {title}
          </h3>
          <p className="font-inter text-[min(3.6vw,15px)] font-medium text-(--colorText)/70">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
