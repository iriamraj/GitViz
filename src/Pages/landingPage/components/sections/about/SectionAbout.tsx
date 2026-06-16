import Heading from "../../heading/Heading";
import IOSwindow from "./components/IOSwindow";
import Line from "./components/Line";
import PreviewBox from "./components/PreviewBox";

import treeImg from "../../../../../assets/images/treeImg.png";
import DivideLine from "../../DivideLine/DivideLine";

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
        <div className="flex flex-col items-center justify-between md:flex-row">
          <IOSwindow />
          <Line />
          <PreviewBox />
        </div>
        <div className="flex w-full items-center justify-center">
          <p
            className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} text-center transition-colors duration-300`}
          >
            See all your GitHub stats laid out in a clean, interactive dashboard
            repositories, language breakdown, star count, and contribution
            activity, all at a glance. No digging through profile pages.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[min(8vw,46px)]">
        <Heading
          heading="Your Commits as a "
          headingColor="Living Tree"
        ></Heading>
        <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-20">
          <IOSwindow />
          <div>
            <img
              src={treeImg}
              alt=""
              className="w-85 max-w-100 md:w-full"
              fetchPriority="low"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <p
            className={`max-w-280 ${isDark ? "text-(--colorTextDark)" : "text-(--colorText)"} text-center transition-colors duration-300`}
          >
            See all your GitHub stats laid out in a clean, interactive dashboard
            repositories, language breakdown, star count, and contribution
            activity, all at a glance. No digging through profile pages.
          </p>
        </div>
      </div>
      <DivideLine marginTop="80px" marginBottom="10px" />
    </section>
  );
}
