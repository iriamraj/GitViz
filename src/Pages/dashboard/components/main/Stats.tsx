import Card from "../Card";
import CardHeading from "./CardHeading";

export default function Stats() {
  return (
    <Card className="h-fit w-full py-3">
      <CardHeading>Stats</CardHeading>
      <div className="flex items-start justify-between overflow-clip">
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

/**
 * from Paper
 * https://app.paper.design/file/01KVQ0QR1BSZGH72ET19V8J7VK/01K4GP58P8JRM8PGBP0586VKYV/ME-0
 * on Jun 22, 2026
 */
// export default function () {
//   return (
//     <div className="flex flex-col items-start gap-2.5 rounded-[10px] border border-solid border-[#FFFFFF] bg-[#D1D4DB] px-3.75 py-3 antialiased [box-shadow:#00000040_0px_4px_2px] [font-synthesis:none]">
//       <div className="w-fit content-center font-['Geist',system-ui,sans-serif] text-base/5 font-bold text-[#47484B]">
//         Core Stats
//       </div>
//       <div className="flex items-start gap-1.25 overflow-clip">
//         <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
//           <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
//             16k
//           </div>
//           <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
//             Total Stars
//           </div>
//         </div>
//         <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
//           <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
//             328
//           </div>
//           <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
//             Total Repos
//           </div>
//         </div>
//         <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
//           <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
//             50
//           </div>
//           <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
//             Total Forks
//           </div>
//         </div>
//         <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
//           <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
//             20k
//           </div>
//           <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
//             Total Commits
//           </div>
//         </div>
//         <div className="flex h-11.25 w-25.75 shrink-0 flex-col items-center justify-center gap-2.5 overflow-clip">
//           <div className="h-5.25 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-[22px]/7 font-medium text-[#2C2D30]">
//             08
//           </div>
//           <div className="h-3.5 w-fit shrink-0 content-center font-['Inter',system-ui,sans-serif] text-xs/4 text-[#585A5E]">
//             Pinned Repos
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
