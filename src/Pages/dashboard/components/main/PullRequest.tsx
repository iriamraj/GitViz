import Card from "../Card";
import LineChart from "../charts/LineChart";
import CardHeading from "./CardHeading";

export default function PullRequest() {
  return (
    <Card className="h-fit w-full pb-1">
      <CardHeading>Pull Request</CardHeading>
      <div className="flex h-fit flex-col justify-between gap-2 md:h-21 md:flex-row md:gap-0">
        <div className="md:w-[80%]">
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
        <div className="h-0.5 w-full bg-gray-400 md:h-full md:w-px"></div>
        <div className="flex h-full md:w-20 gap-5 md:gap-0 md:flex-col text-center justify-center">
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
