import Curve from "../../../curve/Curve";
import CardTree from "./CardTree";

export default function Visual() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="w-full">
        <div className="relative flex w-full flex-col items-center">
          <Curve height={55} paddingTop={20}/>
          {/* <div className="w-full h-34 md:h-44 bg-linear-to-b from-(--colorAsh) to-(--colorBase)"></div> */}
          <div className="h-34 w-full md:h-44"></div>
          <CardTree />
        </div>
      </div>
    </div>
  );
}
