function Card({ width, height }: { width: string; height: string }) {
	return (
		<div className="flex flex-col items-center text-(--colorBase)">
			<div 
				className="bg-(--colorWhite) rounded-2xl px-3 py-2"
				style={{
					width,
					height,
				}}
			>
				<div className="flex justify-between">
					<h3>Commit Frequency</h3>
					<p>view</p>
				</div>
				<div className="w-full">
					<div className="flex flex-col justify-between h-full w-1/2">
						<div className="flex gap-2 items-end">
							<h4 className="text-[25px]">340</h4>
							<p className="text-[14px]">
								Total <br /> Commits{" "}
							</p>
						</div>
						<div className="flex">
							<h4 className="text-[25px]">340</h4>
							<p className="text-[14px]">
								Total <br /> Commits{" "}
							</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
			<div className="w-1 h-10 rounded-full bg-linear-to-b from-#00000080 to-(--colorPurple)"></div>
		</div>
	);
}

export default function HeroCards() {
	return (
		<div className="w-full absolute top-25 z-1">
			<div className="w-full pt-15 flex justify-between items-end px-20">
				<Card width="180px" height="100px" />
				<Card width="240px" height="120px" />
				<Card width="280px" height="140px" />
				<Card width="240px" height="120px" />
				<Card width="180px" height="100px" />
			</div>
			<div className="bg-(--colorWhite)/60 w-full h-0.5"></div>
		</div>
	);
}
