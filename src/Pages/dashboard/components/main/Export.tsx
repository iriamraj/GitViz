import Card from "../Card";
import CardHeading from "./CardHeading";
import pdfIcon from "../../../../assets/icons/pdf-icon.svg";
import jpegIcon from "../../../../assets/icons/jpeg-icon.svg";

export default function Export() {
  return (
    <Card className="h-fit w-40">
      <CardHeading>Export</CardHeading>
      <div className="flex justify-around gap-2">
        <div className="flex items-center justify-center rounded-[10px] border-2 border-white bg-[#D1D4DB] p-1">
          <img src={pdfIcon} alt="" className="rounded-[7px] w-[85%]" />
        </div>
        <div className="flex items-center justify-center rounded-[10px] border-2 border-white bg-[#D1D4DB] p-1">
          <img src={jpegIcon} alt="" className="rounded-[7px] w-[85%]" />
        </div>
      </div>
    </Card>
  );
}
