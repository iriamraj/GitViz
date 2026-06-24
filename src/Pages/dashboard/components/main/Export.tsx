import Card from "../Card";
import CardHeading from "./CardHeading";
import pdfIcon from "../../../../assets/icons/pdf-icon.svg";

export default function Export() {
  return (
    <Card className="h-full w-50">
      <CardHeading>Export</CardHeading>
      <div className="flex justify-around">
        <div className="flex h-15 w-13 items-center justify-center rounded-[10px] border-2 border-white bg-[#D1D4DB]">
          <img src={pdfIcon} alt="" className="rounded-[7px]" />
        </div>
        <div className="flex h-15 w-13 items-center justify-center rounded-[10px] border-2 border-white bg-[#D1D4DB]">
          <img src={pdfIcon} alt="" className="rounded-[7px]" />
        </div>
      </div>
    </Card>
  );
}
