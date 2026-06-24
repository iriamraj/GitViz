import Card from "../Card";
import CardHeading from "./CardHeading";

export default function Achievement() {
  return (
    <Card className="font-inter grid w-70">
      <CardHeading>Achievement</CardHeading>
      <div className="center grid h-16.5 w-full scrollbar-thin scrollbar-thumb-(--colorPurple) grid-cols-3 gap-y-2 overflow-y-scroll">
        <div className="flex h-fit w-full flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white"></div>
          <p>Night owl</p>
        </div>

        <div className="flex h-fit w-full flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white"></div>
          <p>Night owl</p>
        </div>

        <div className="flex h-fit w-full flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white"></div>
          <p>Night owl</p>
        </div>

        <div className="flex h-fit w-full flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white"></div>
          <p>Night owl</p>
        </div>

        <div className="flex h-fit w-full flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white"></div>
          <p>Night owl</p>
        </div>

        <div className="flex h-fit w-full flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-full border border-white"></div>
          <p>Night owl</p>
        </div>
      </div>
    </Card>
  );
}
