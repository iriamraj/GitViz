export default function SearchBar() {
	return (
		<div className="w-185.25 flex justify-between items-center font-inter font-medium mt-8">
			<div className="w-139.25 h-11.5 rounded-full bg-(--colorBox) border border-(--colorBorder) shadow-[0_4px_3px_1px_#00000030]">
				<input
					type="text"
					placeholder="Enter a GitHub username or url..."
					className="w-full h-full outline-none px-5 text-[#00000090] placeholder:text-[#00000047]"
				/>
			</div>
			<button className="w-40.5 h-11.75 bg-(--colorPurple) rounded-full text-(--colorBox) text-[16px] shadow-[0_0_10px_5px_#6F60B530]">
				Visualize Now
			</button>
		</div>
	);
}
