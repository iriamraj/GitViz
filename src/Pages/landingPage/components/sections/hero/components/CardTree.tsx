import Card from "../../../card/Card";
import { motion } from "framer-motion";

// Types
import type { TreeLineType } from "../../../../types/TreeLineType";
import type { VisualBoxType } from "../../../../types/VisualBoxType";

const CardTreeLine = ({ isFaded, width, height }: TreeLineType) => {
  return (
    <div
      className={`${isFaded ? "from-#00000080 bg-linear-to-b to-(--colorPurple)" : "bg-(--colorPurple)"} rounded-full ${width} ${height}`}
    ></div>
  );
};

const CardTreeLine2 = () => {
  return (
    <div className="relative -top-0.5">
      <CardTreeLine
        isFaded={false}
        width="w-[min(185vw,900px)]"
        height="h-[3px]"
      />
      <div className="relative -top-0.5 flex items-center justify-between">
        <CardTreeLine isFaded={false} width="w-[3px]" height="h-[20px]" />
        <CardTreeLine isFaded={false} width="w-[3px]" height="h-[20px]" />
        <CardTreeLine isFaded={false} width="w-[3px]" height="h-[20px]" />
        <CardTreeLine isFaded={false} width="w-[3px]" height="h-[20px]" />
      </div>
    </div>
  );
};

const VisualBox = ({
  name,
  info,
  infoName,
  info2,
  infoName2,
}: VisualBoxType) => {
  return (
    <Card
      borderRadius="rounded-[16px]"
      width="w-[min(55vw,245px)]"
      height="h-fit md:h-[84px]"
    >
      <div className="flex h-full w-full flex-col justify-between px-3 py-2.5">
        <div className="flex items-center justify-between">
          <h3 className="font-geist text-[min(3.5vw,16px)] text-(--colorCard)">
            {name}
          </h3>
          <div className="font-inter flex items-center justify-center rounded-full border px-0.75 py-[0.5px] text-[min(2.7vw,11px)] font-normal text-(--colorCard)/70">
            View
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="font-inter text-[min(5vw,24px)] font-normal">
              {info}
            </p>
            <p className="font-inter text-[min(2.2vw,10px)] leading-3 font-normal text-(--colorCard)/70">
              {infoName}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-inter text-[min(5vw,24px)] font-normal">
              {info2}
            </p>
            <p className="font-inter text-[min(2.2vw,10px)] leading-3 font-normal text-(--colorCard)/70">
              {infoName2}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const CardTree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="absolute top-13 flex flex-col items-center justify-center md:top-20"
    >
      <CardTreeLine isFaded={true} width="w-[3px]" height="h-[40px]" />
      {/* First Card */}
      <VisualBox
        name="Contribution Activity"
        info="1,247"
        infoName="Total Contribution"
        info2="20%"
        infoName2="This Month"
      />
      <CardTreeLine isFaded={false} width="w-[3px]" height="h-[40px]" />
      <div className="flex w-screen scrollbar-none flex-col items-start overflow-scroll px-5 lg:items-center">
        <div className="flex flex-col items-center py-1">
          <CardTreeLine2 />
          <div className="relative -top-1 flex items-center gap-[min(5vw,56px)]">
            <VisualBox
              name="Language Distribution"
              info="08"
              infoName="Total Languages"
              info2="C++"
              infoName2="Dominant"
            />
            <VisualBox
              name="Commit Frequency"
              info="340"
              infoName="Total Commits"
              info2="12%"
              infoName2="This Month"
            />
            <VisualBox
              name="Star History"
              info="2,891"
              infoName="Total Stars"
              info2="30%"
              infoName2="This Month"
            />
            <VisualBox
              name="Top Repositories"
              info="34"
              infoName="Total Repositories "
              info2="55%"
              infoName2="This Month"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardTree;
