import cardImg from "../../../../../../assets/images/cardImg.png";

export default function PreviewBox() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex h-fit w-[95%] items-center justify-center rounded-2xl bg-(--colorBox) md:h-49.5 md:w-101">
        <img
          src={cardImg}
          alt=""
          className="w-[90%]"
          fetchPriority="low"
          loading="lazy"
        />
      </div>
      <div className="h-23 w-[95%] rounded-2xl bg-(--colorBox) md:h-27.5 md:w-101.25"></div>
    </div>
  );
}
