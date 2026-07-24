import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
	return (
		<div className="bg-(--colorForeground) w-full sm:max-w-120 h-10 shadow-[0_1px_3px_0_#00000030] rounded-full flex items-center text-[16px] relative z-10">
			<FiSearch className="w-6 h-6 mx-3 shrink-0 text-(--colorTextLight)" />
			<input
				type="text"
				className="h-full w-full min-w-0 outline-none truncate"
				placeholder="Enter a GitHub username or URL..."
			/>
			<div className="bg-(--colorPurple) w-fit h-full px-4 sm:px-5 text-white flex items-center justify-center rounded-tr-full rounded-br-full shrink-0">
				Search
			</div>
		</div>
	);
}