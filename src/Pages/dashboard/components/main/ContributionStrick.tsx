import Card from "../Card";
import CardHeading from "./CardHeading";

export default function ContributionStrick() {
  return (
    <Card className="h-full min-w-60 ">
      <CardHeading>Contribution Strick</CardHeading>
      <div className="flex flex-col items-center justify-around self-stretch overflow-clip antialiased [font-synthesis:none] gap-3">
        <div className="flex w-full items-center justify-evenly gap-10 overflow-clip">
          <div className="flex flex-col items-center justify-center self-stretch overflow-clip">
            <div className="w-fit content-center font-['Inter',system-ui,sans-serif] text-xl/6 font-medium text-[#2C2D30]">
              06
            </div>
            <div className="w-fit content-center font-['Inter',system-ui,sans-serif] text-[10px]/3 text-[#585A5E]">
              Current Strick
            </div>
          </div>
          <div className="flex flex-col items-center justify-center self-stretch overflow-clip">
            <div className="w-fit content-center font-['Inter',system-ui,sans-serif] text-xl/6 font-medium text-[#2C2D30]">
              06
            </div>
            <div className="w-fit content-center font-['Inter',system-ui,sans-serif] text-[10px]/3 text-[#585A5E]">
              Current Strick
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center overflow-clip">
          <div className="w-fit content-center font-['Inter',system-ui,sans-serif] text-[15px]/4.5 font-medium text-[#2C2D30]">
            January
          </div>
          <div className="w-fit content-center font-['Inter',system-ui,sans-serif] text-[10px]/3 text-[#585A5E]">
            Most Productive Month
          </div>
        </div>
      </div>
    </Card>
  );
}
