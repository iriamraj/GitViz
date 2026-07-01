export default function Heading() {
	return (
		<div className="flex items-center gap-79 justify-between relative shrink-0 w-full h-fit">
			<div className="content-center font-['Poppins',system-ui,sans-serif] font-medium text-black text-[32px]/10">
				Dashboard
			</div>
			<div className="flex rounded-2xl items-center w-107.5 [box-shadow:#0000002B_0px_5px_15px] bg-[#DBE9EA] border border-solid border-[#FFFFFF] h-10">
				<div className="h-3 w-3 bg-gray-400 mx-3 rounded-full" />
				<input
					type="text"
					className="content-center font-['Poppins',system-ui,sans-serif] text-[#6F60B5] text-base/5 flex-1 w-full h-full outline-none"
					placeholder="Enter a Github username or url..."
				/>
				<div className="w-23 h-full bg-[#6F60B5] rounded-r-2xl flex justify-center items-center text-[#DBE9EA] font-medium font-['Poppins',system-ui,sans-serif]">
					Search
				</div>
			</div>
		</div>
	);
}
