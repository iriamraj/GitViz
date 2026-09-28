import { useParams } from "react-router-dom";
import Card from "../../../Card";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import SmallCard from "./SmallCard";
import { useGithubUser } from "../../../../../../hooks/useGithub";

export default function UserProfile({ noViewMore }: { noViewMore?: boolean }) {
	const { searchTerm } = useParams<{ searchTerm: string }>();
	const { data: user, isLoading, error } = useGithubUser(searchTerm);

	if (isLoading) {
		return (
			<Card className="w-full lg:w-[288px] flex flex-col gap-6 px-4 py-6 animate-pulse">
				<div className="w-24 h-24 bg-(--colorDashBorder) rounded-full mx-auto" />
				<div className="h-6 bg-(--colorDashBorder) rounded w-3/4 mx-auto" />
				<div className="h-4 bg-(--colorDashBorder) rounded w-1/2 mx-auto" />
			</Card>
		);
	}

	if (error || !user || user.error) {
		return (
			<Card className="w-full lg:w-[288px] p-6 text-center text-(--colorTextLight)">
				User not found
			</Card>
		);
	}

	return (
		<Card className="w-full lg:w-[288px] flex flex-col gap-6 px-4 py-6">
			<div className="text-center flex flex-col items-center gap-4">
				<img
					src={user.avatar_url}
					alt={user.name || user.login}
					className="w-24 h-24 border border-(--colorDashBorder) rounded-full shrink-0 object-cover"
				/>
				<div>
					<h3 className="text-2xl font-medium line-clamp-2 text-(--colorText)">
						{user.name || user.login}
					</h3>
					<p className="text-[14px] text-(--colorPurple) font-medium line-clamp-1">
						@{user.login}
					</p>
				</div>
				{user.bio && (
					<p className="text-[14px] text-(--colorTextLight) leading-5 line-clamp-4">
						{user.bio}
					</p>
				)}
			</div>

			<div className="text-[14px] flex flex-col gap-3">
				{user.email && (
					<SmallCard className="gap-3">
						<div className="w-8 h-8 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0">
							<MdOutlineMail className="w-4 h-4 text-(--colorPurple)" />
						</div>
						<p className="truncate text-(--colorText)">{user.email}</p>
					</SmallCard>
				)}

				{user.twitter_username && (
					<SmallCard className="gap-3">
						<div className="w-8 h-8 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0">
							<FaXTwitter className="w-4 h-4 text-(--colorPurple)" />
						</div>
						<p className="truncate text-(--colorText)">@{user.twitter_username}</p>
					</SmallCard>
				)}
			</div>

			<div className="w-full flex flex-col gap-3 items-center">
				<SmallCard className="w-fit justify-evenly gap-3">
					<div className="flex flex-col items-center justify-center text-(--colorText)">
						<p className="text-[20px] font-medium">{user.followers}</p>
						<p className="text-[12px]">Followers</p>
					</div>
					<div className="flex flex-col items-center justify-center text-(--colorText)">
						<p className="text-[20px] font-medium">{user.following}</p>
						<p className="text-[12px]">Following</p>
					</div>
				</SmallCard>

				{!noViewMore && (
					<a
						href={user.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full text-center bg-(--colorPurple) rounded-full py-2.5 text-white cursor-pointer block"
					>
						View on GitHub
					</a>
				)}
			</div>
		</Card>
	);
}