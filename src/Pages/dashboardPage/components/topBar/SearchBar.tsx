import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
	const [term, setTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (term.trim()) {
			const cleanTerm = term.replace(/https?:\/\/github\.com\//, "").replace(/\/$/, "");
			navigate(`/dashboard/${cleanTerm}`);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-(--colorForeground) w-full sm:max-w-120 h-10 shadow-[0_1px_3px_0_#00000030] rounded-full flex items-center text-[16px] relative z-10"
		>
			<FiSearch className="w-6 h-6 mx-3 shrink-0 text-(--colorTextLight)" />
			<input
				type="text"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
				className="h-full w-full min-w-0 bg-transparent outline-none truncate text-(--colorText) placeholder:text-(--colorTextLight)"
				placeholder="Enter a GitHub username or URL..."
			/>
			<button
				type="submit"
				className="bg-(--colorPurple) w-fit h-full px-4 sm:px-5 text-white flex items-center justify-center rounded-r-full shrink-0 cursor-pointer"
			>
				Search
			</button>
		</form>
	);
}