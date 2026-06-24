import Card from "../Card";
import CardHeading from "./CardHeading";

export default function Activity() {
  return (
    <Card className="h-fit w-full">
      <CardHeading>Recent Activity</CardHeading>
      <div className="flex h-full w-full">
        <div className="mt-0.5 h-44.5 w-0.5 translate-x-2 bg-green-600"></div>
        <div className="flex h-45 w-full scrollbar-thin scrollbar-thumb-(--colorPurple) flex-col gap-2 overflow-y-scroll">
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>
              Pushed 3 commits to main in portfolio-website here for resion
            </p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
          <div className="items- flex h-fit w-full gap-4">
            <div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
            <p className="text-nowrap">10:45 AM</p>
            <p>Pushed 3 commits to main in portfolio-website</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
