import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
	return (
		<div className="bg-(--colorForeground) w-120 h-10 shadow-[0_0px_2px_0px_#00000050] rounded-2xl flex  items-center">
			<FiSearch className="w-5 h-5 mx-2" />
            <input type="text"  className="h-full w-full outline-none" placeholder="Search Here..."/>
		</div>
	);
}
