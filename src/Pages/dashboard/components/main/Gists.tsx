import Card from "../Card";
import BarChart from "../charts/BarChart";
import CardHeading from "./CardHeading";

export default function Gists() {
  return (
    <Card className="h-fit w-full md:pb-0.5">
      <CardHeading>Gists</CardHeading>
      <div className="flex w-full flex-col items-center gap-0.5 md:flex-row md:gap-2">
        <div className="h-20 w-full md:w-[80%]">
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
        <div className="flex h-full gap-5 text-center md:w-20 md:flex-col md:gap-0">
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
