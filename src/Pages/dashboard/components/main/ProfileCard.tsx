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

