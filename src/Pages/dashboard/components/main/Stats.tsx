import Card from "../Card";
import CardHeading from "./CardHeading";

export default function Stats() {
  return (
    <Card className="h-fit w-full py-3">
      <CardHeading>Stats</CardHeading>
      <div className="flex flex-wrap items-start gap-y-2 overflow-clip md:flex-nowrap md:justify-between">
        <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
          <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
            16k
          </div>
          <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
            Total Stars
          </div>
        </div>
        <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
          <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
            328
          </div>
          <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
            Total Repos
          </div>
        </div>
        <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
          <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
            50
          </div>
          <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
            Total Forks
          </div>
        </div>
        <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
          <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
            20k
          </div>
          <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
            Total Commits
          </div>
        </div>
        <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
          <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
            08
          </div>
          <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
            Pinned Repos
          </div>
        </div>
      </div>
    </Card>
  );
}
