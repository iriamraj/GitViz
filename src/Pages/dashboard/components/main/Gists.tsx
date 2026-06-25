import Card from "../Card";
import BarChart from "../charts/BarChart";
import CardHeading from "./CardHeading";

export default function Gists() {
  return (
    <Card className="h-full w-full pb-0.5">
      <CardHeading>Gists</CardHeading>
      <div className="flex w-full gap-2">
        <div className="h-20 w-[80%]">
          <BarChart
            bars={[
              {
                label: "Monthly",
                color: "#DDD55A",
                borderRadius: false,
                data: [1200, 1900, 3000, 500, 2400, 3500],
              },
              {
                label: "Year",
                color: "#6f60b5",
                borderRadius: true,
                data: [2500, 1300, 3600, 800, 1200, 2500],
              },
            ]}
            XAxisLabel={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
          />
        </div>
        <div className="h-full w-px bg-gray-400"></div>
        <div className="flex h-full w-20 flex-col text-center">
          <div>
            <p className="text-[16px] font-semibold">42</p>
            <p>PRs opened</p>
          </div>
          <div>
            <p className="text-[16px] font-semibold">42</p>
            <p>PRs opened</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
