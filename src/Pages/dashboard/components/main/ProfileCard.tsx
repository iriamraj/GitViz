import Card from "../Card";
import emailIcon from "../../../../assets/icons/email-icon.svg";

export default function ProfileCard() {
  return (
    <>
      <Card className="font-inter flex max-h-122 w-70 flex-col items-center text-[#47484B]">
        <div className="font-inter flex w-full justify-between text-[13px] text-black/70">
          <p>Since: 2024-10-04</p>
          <p>@iriamraj</p>
        </div>
        <div className="mt-3 flex h-30 w-30 shrink-0 items-center justify-center overflow-hidden rounded-full border-5 border-[#b59f56] bg-gray-400">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
            alt=""
            className="h-30 w-30 object-cover"
          />
        </div>

        <div>
          <h2 className="font-geist mt-4 line-clamp-2 text-center text-3xl leading-8 text-black">
            Jamat Ali Mallick
          </h2>

          <div className="mt-2 max-h-18 w-full text-[14px] font-normal">
            <p className="line-clamp-4 text-center tracking-[-4%] text-wrap text-black/70">
              I create courses that make learning things like JavaScript easy
              and fun.
            </p>
          </div>

          <div className="ml-4 flex flex-wrap gap-2">
            <div className="mt-6 flex items-center gap-2">
              <div className="h-5 w-6 overflow-hidden rounded-[3px]">
                <img src={emailIcon} alt="" />
              </div>
              <p className="text-[12px] text-black/70">ir.iamraj@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-6 overflow-hidden rounded-[3px]">
                <img src={emailIcon} alt="" />
              </div>
              <p className="text-[12px] text-black/70">@Raj_Mallick</p>
            </div>
          </div>

          <div className="mt-4 flex w-full justify-center gap-8 [&>div>p]:text-center">
            <div>
              <p className="text-[16px] font-semibold">2,564</p>
              <p className="text-[12px]">Followers</p>
            </div>
            <div>
              <p className="text-[16px] font-semibold">356</p>
              <p className="text-[12px]">Following</p>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <button className="font-inter mt-3 h-11 w-[90%] cursor-pointer rounded-[5px] bg-(--colorPurple) font-semibold tracking-wider text-(--colorBox) transition-transform duration-200 active:scale-95">
              View More
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}

// export default function () {
//   return (
//     <div className="flex h-120 w-73.75 flex-col items-center gap-5.75 overflow-clip rounded-[10px] border border-solid border-[#FFFFFF] bg-[#D1D4DB] p-2.25 antialiased [box-shadow:#00000040_0px_4px_2px] [font-synthesis:none]">
//       <div className="flex items-center justify-between self-stretch overflow-clip">
//         <div className="w-fit shrink-0 content-center font-sans text-[12px] leading-[100%] font-bold text-[#53565A]">
//           Since: 2024-04-01
//         </div>
//         <div className="w-fit shrink-0 content-center font-sans text-[12px] leading-[100%] text-[#53565A]">
//           @iriamraj
//         </div>
//       </div>
//       <div className="h-17 w-19 shrink-0 rounded-sm bg-[#848484]" />
//       <div className="flex flex-col items-center justify-center gap-1.25 self-stretch overflow-clip">
//         <div className="w-fit content-center font-['Geist',system-ui,sans-serif] text-3xl font-bold text-[#1E1E21]">
//           Jamat Ali Mallick
//         </div>
//         <div className="flex h-16 shrink-0 flex-wrap content-center justify-center self-stretch text-center font-sans text-[13px] leading-[150%] tracking-[-0.04em] text-[#53565A]">
//           I create courses that make learning things like JavaScript easy and
//           fun
//         </div>
//       </div>
//       <div className="flex w-49.25 flex-col items-start gap-1.75 overflow-clip px-1">
//         <div className="flex items-center gap-2 overflow-clip">
//           <div className="h-3 w-3.25 shrink-0 bg-[#999493]" />
//           <div className="flex flex-wrap content-center justify-center text-center font-sans text-[12px] leading-[150%] tracking-[-0.04em] text-[#53565A]">
//             ir.iamraj@gamail.com
//           </div>
//         </div>
//         <div className="flex items-center gap-2 overflow-clip">
//           <div className="h-3 w-3.25 shrink-0 bg-[#999493]" />
//           <div className="flex flex-wrap content-center justify-center text-center font-sans text-[12px] leading-[150%] tracking-[-0.04em] text-[#53565A]">
//             @iamraj
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center gap-3 overflow-clip">
//         <div className="flex w-15.75 shrink-0 flex-col items-center justify-center gap-0.5 overflow-clip">
//           <div className="w-fit content-center font-sans text-[15px]/4.5 font-bold text-[#47484B]">
//             2,564
//           </div>
//           <div className="w-fit content-center font-sans text-[12px] leading-[100%] font-medium text-[#47484B]">
//             Followers
//           </div>
//         </div>
//         <div className="flex w-15.75 shrink-0 flex-col items-center justify-center gap-0.5 overflow-clip">
//           <div className="w-fit content-center font-sans text-[15px]/4.5 font-bold text-[#47484B]">
//             2,564
//           </div>
//           <div className="w-fit content-center font-sans text-[12px] leading-[100%] font-medium text-[#47484B]">
//             Followers
//           </div>
//         </div>
//       </div>
//       <div className="flex h-11.25 shrink-0 flex-col items-center justify-center self-stretch overflow-clip rounded-[3px] bg-(--colorPurple)">
//         <div className="flex w-fit flex-wrap content-center justify-center text-center font-sans text-[15px] leading-[150%] font-semibold text-[#D1D4DB]">
//           View More
//         </div>
//       </div>
//     </div>
//   );
// }
