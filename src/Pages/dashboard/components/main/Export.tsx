import Card from "../Card";
import CardHeading from "./CardHeading";
import pdfIcon from "../../../../assets/icons/pdf-icon.svg";
import jpegIcon from "../../../../assets/icons/jpeg-icon.svg";

export default function Export() {
  return (
    <Card className="order-2 h-fit w-full md:order-1 md:w-40">
      <CardHeading>Export</CardHeading>
      <div className="flex min-h-15 gap-5 md:justify-around md:gap-2">
        <div className="flex items-center justify-center rounded-[10px] border-2 border-white bg-[#D1D4DB] p-1">
          <img src={pdfIcon} alt="" className="w-[85%] rounded-[7px]" />
        </div>
        <div className="flex items-center justify-center rounded-[10px] border-2 border-white bg-[#D1D4DB] p-1">
          <img src={jpegIcon} alt="" className="w-[85%] rounded-[7px]" />
        </div>
      </div>
    </Card>
  );
}
