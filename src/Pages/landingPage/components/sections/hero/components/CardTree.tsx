import Card from "../../../card/Card";

// Types
import type { TreeLineType } from "../../../../types/TreeLineType";
import type { VisualBoxType } from "../../../../types/VisualBoxType";

const CardTreeLine = ({ isFaded, width, height }: TreeLineType) => {
  return (
    <div
      className={`${isFaded ? "from-#00000080 bg-linear-to-b to-(--colorPurple)" : "bg-(--colorPurple)"} rounded-full`}
      style={{
        width: width,
        height: height,
      }}
    ></div>
  );
};

const CardTreeLine2 = () => {
  return (
    <div className="relative -top-0.5">
      <CardTreeLine isFaded={false} width="900px" height="3px" />
      <div className="relative -top-0.5 flex items-center justify-between">
        <CardTreeLine isFaded={false} width="3px" height="20px" />
        <CardTreeLine isFaded={false} width="3px" height="20px" />
        <CardTreeLine isFaded={false} width="3px" height="20px" />
        <CardTreeLine isFaded={false} width="3px" height="20px" />
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
    <Card borderRadius="16px" width="239px" height="84px">
      <div className="flex h-full w-full flex-col justify-between px-3 py-2.5">
        <div className="flex items-center justify-between">
          <h3 className="font-geist text-(--colorCard)">{name}</h3>
          <div className="font-inter flex h-5 w-10 items-center justify-center rounded-full border text-[11px] font-normal text-(--colorCard)/70">
            View
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="font-inter text-[24px] font-normal">{info}</p>
            <p className="font-inter text-[10px] leading-3 font-normal text-(--colorCard)/70">
              {infoName}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-inter text-[24px] font-normal">{info2}</p>
            <p className="font-inter text-[10px] leading-3 font-normal text-(--colorCard)/70">
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
    <div className="absolute top-13 flex flex-col items-center justify-center md:top-20">
      <CardTreeLine isFaded={true} width="3px" height="40px" />
      {/* First Card */}
      <VisualBox
        name="Contribution Activity"
        info="1,247"
        infoName="Total Contribution"
        info2="20%"
        infoName2="This Month"
      />
      <CardTreeLine isFaded={false} width="3px" height="40px" />
      <div className="flex w-screen scrollbar-none flex-col items-start overflow-scroll px-5 lg:items-center">
        <div className="flex flex-col items-center py-1">
          <CardTreeLine2 />
          <div className="relative -top-1 flex items-center gap-[min(5vw,56px)]">
            <VisualBox
              name="Contribution Activity"
              info="1,247"
              infoName="Total Contribution"
              info2="20%"
              infoName2="This Month"
            />
            <VisualBox
              name="Contribution Activity"
              info="1,247"
              infoName="Total Contribution"
              info2="20%"
              infoName2="This Month"
            />
            <VisualBox
              name="Contribution Activity"
              info="1,247"
              infoName="Total Contribution"
              info2="20%"
              infoName2="This Month"
            />
            <VisualBox
              name="Contribution Activity"
              info="1,247"
              infoName="Total Contribution"
              info2="20%"
              infoName2="This Month"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTree;
