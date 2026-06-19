import preview from "../../../../../../assets/images/preview.png";

export default function IOSwindow() {
  return (
    <div className="h-fit max-h-89.5 w-[95%] max-w-164.5 rounded-2xl bg-(--colorBox)">
      <div className="flex h-7.5 w-full items-center gap-2 rounded-t-2xl bg-(--colorPurple) px-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex items-center justify-center px-1 pb-1 md:px-2 md:pb-2">
        <img
          src={preview}
          alt="preview"
          className="rounded-b-2xl"
          fetchPriority="low"
          loading="lazy"
        />
      </div>
    </div>
  );
}
