import Curve from "../../../curve/Curve";
import CardTree from "./CardTree";
import { motion } from "framer-motion";

export default function Visual() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="relative flex w-full flex-col items-center justify-center"
    >
      <div className="w-full">
        <div className="relative flex w-full flex-col items-center">
          <Curve height={"md:h-[280px]"} paddingTop={"md:pt-[80px]"} />
          {/* <div className="w-full h-34 md:h-44 bg-linear-to-b from-(--colorAsh) to-(--colorBase)"></div> */}
          <div className="h-38 w-full md:h-34"></div>
          <CardTree />
        </div>
      </div>
    </motion.div>
  );
}
