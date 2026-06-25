import Card from "../Card";
import LineChart from "../charts/LineChart";
import CardHeading from "./CardHeading";

export default function PullRequest() {
  return (
    <Card className="h-fit w-full pb-1">
      <CardHeading>Pull Request</CardHeading>
      <div className="flex h-21 justify-between">
        <div className="w-[80%]">
          <LineChart
            lines={[
              {
                label: "Monthly",
                color: "#6f60b5",
                data: [1200, 2400, 5000, 500, 2800, 5000],
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
