import CardTree from "./CardTree";

export default function Visual() {
	return (
		<div className="w-full relative flex flex-col justify-center items-center">
			<div className="w-full">
				<div className="w-full relative flex flex-col items-center">
					<div className="w-full h-55 pt-20 flex justify-center overflow-hidden top-0">
						<div className="curve rounded-[50%] w-[140%] h-150 border shrink-0 border-(--colorPurple) shadow-[0_-5px_80px_#6f60b5] outline-2 outline-(--colorPurple)/40 bg-(--colorAsh) relative"></div>
					</div>
					<div className="w-full h-44 bg-linear-to-b from-(--colorAsh) to-(--colorBase)"></div>
					<CardTree />
				</div>
			</div>
		</div>
	);
}
