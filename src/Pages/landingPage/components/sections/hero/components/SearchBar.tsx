export default function SearchBar() {
	return (
		<div className="w-[95%] max-w-185.25 flex flex-col justify-between items-center font-inter font-medium mt-8 md:flex-row gap-5">
			<div className="w-[95%] max-w-139.25 h-[min(12vw,46px)] rounded-full bg-(--colorBox) border border-(--colorBorder) shadow-[0_4px_3px_1px_#00000030]">
				<input
					type="text"
					placeholder="Enter a GitHub username or url..."
					className="w-full h-full outline-none px-5 text-[#00000090] placeholder:text-[#00000047] text-[min(4vw,16px)]"
				/>
			</div>
			<button className="w-[min(33vw,162px)] h-[min(10vw,47px)] bg-(--colorPurple) rounded-full text-(--colorBox) text-[min(3.7vw,16px)] shadow-[0_0_10px_5px_#6F60B530] cursor-pointer">
				Visualize Now
			</button>
		</div>
	);
}
