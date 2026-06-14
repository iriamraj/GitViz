import Curve from "../../../curve/Curve";
import CardTree from "./CardTree";

export default function Visual() {
	return (
		<div className="w-full relative flex flex-col justify-center items-center">
			<div className="w-full">
				<div className="w-full relative flex flex-col items-center">
					<Curve />
					{/* <div className="w-full h-34 md:h-44 bg-linear-to-b from-(--colorAsh) to-(--colorBase)"></div> */}
					<div className="w-full h-34 md:h-44 bg-(--colorBase)"></div>
					<CardTree />
				</div>
			</div>
		</div>
	);
}
