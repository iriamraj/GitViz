import { TbActivity } from "react-icons/tb";
import Card from "./Card";
import HeadingCard from "./HeadingCard";

// const dummyData = [
// 	{
// 		id: 1,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 2,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 3,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 4,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 5,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 6,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 7,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 8,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 9,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// 	{
// 		id: 10,
// 		date: "10:20 AM",
// 		activity: "Pushed 3 commit on Main",
// 	},
// ];

export default function RecentActivity() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 pb-4 w-full lg:w-72 shrink-0">
			<HeadingCard Icon={TbActivity}>Recent Activity</HeadingCard>
			{/* <div className="flex h-full w-full gap-4 pl-4">
				<div className="w-1 h-full bg-(--colorDashBorder) my-2"></div>
				<div className="w-full h-40 overflow-y-scroll mt-2 -translate-x-5.75 flex flex-col gap-3">
					{dummyData.map((item) => (
						<div key={item.id} className="flex gap-6 items-center">
							<div className="w-3 h-3 bg-green-400 rounded-full"></div>
							<p>{item.date}</p>
							<p>{item.activity}</p>
						</div>
					))}
				</div>
			</div> */}
		</Card>
	);
}
