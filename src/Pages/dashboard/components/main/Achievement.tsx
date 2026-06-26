import Card from "../Card";
import CardHeading from "./CardHeading";

export default function Achievement() {
  const dummyData = Array.from({ length: 10 }).fill("1");
  return (
    <Card className="font-inter grid w-70 min-w-full">
      <CardHeading>Achievement</CardHeading>
      <div className="center grid h-15 w-full scrollbar-thin scrollbar-thumb-(--colorPurple) grid-cols-3 gap-y-2 overflow-y-scroll">
        {dummyData.map(() => (
          <div className="flex h-fit w-full flex-col items-center gap-2">
            <div className="h-9 w-9 rounded-full border border-white"></div>
            <p>Night owl</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
