import type { CardUsageType } from "../../../types/CardUsageType";
import Card from "../../card/Card";
import SectionDivideLine from "../../DivideLine/DivideLine";
import Heading from "../../heading/Heading";

//Store
import useThemeStore from "../../../store/ThemeStore";

export default function SectionUsage() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <section id="Usage" className="flex flex-col px-5 xl:px-46">
      <Heading heading="How It " headingColor="Works"></Heading>
      <div className="mt-6 flex flex-col flex-wrap items-center justify-between gap-[min(6vw,38px)] md:flex-row">
        <CardUsage
          id="01"
          title="Enter a Username"
          description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
        />
        <CardUsage
          id="02"
          title="Enter a Username"
          description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
        />
        <CardUsage
          id="03"
          title="Enter a Username"
          description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
        />
      </div>
      <div className="mt-[min(8vw,40px)] flex w-full items-center justify-center">
        <p
          className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)/80"} text-center font-medium transition-colors duration-300`}
        >
          Every commit you've ever pushed, mapped out as branching paths — just
          like Git itself thinks. Trace your project's growth, spot your most
          active sprints, and see how your work has evolved over time.
        </p>
      </div>
      <SectionDivideLine marginTop="80px" marginBottom="10px" />
    </section>
  );
}

function CardUsage({ id, title, description }: CardUsageType) {
  return (
    <div className="w-90% flex flex-col items-start gap-6">
      <div className="ml-3 flex h-11 w-11 rotate-45 items-center justify-center rounded-xl bg-(--colorPurple) text-2xl font-bold text-(--colorAsh)">
        <div className="-rotate-45">{id}</div>
      </div>
      <Card borderRadius="24px" width="355px" height="fit">
        <div className="flex h-full w-full flex-col gap-1 p-3">
          <h3 className="font-geist text-(--colorText)">{title}</h3>
          <p className="font-inter tracking- text-[15px] font-medium text-(--colorText)/70">
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
}
