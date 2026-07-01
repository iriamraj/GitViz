import CardContainer from "../../../common/CardContainer";
import CardHeading from "../../../common/CardHeading";

export default function Organization() {
	return (
		<CardContainer className="w-56.25 gap-2.5 h-30.75 p-3.5">
			<CardHeading>Organization</CardHeading>
			<div className="flex overflow-clip items-center self-stretch flex-1 gap-2 justify-center">
				<div className="flex overflow-clip flex-col items-center gap-[2.5px] justify-center">
					<div className="rounded-full shrink-0 bg-[#CBDCDC] border border-solid border-[#FFFFFF] size-11" />
					<div className="content-center text-[12px] tracking-[-0.04em] leading-[150%] text-center w-fit font-['Poppins',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
						Facebook
					</div>
				</div>
				<div className="flex overflow-clip flex-col items-center gap-[2.5px] justify-center">
					<div className="rounded-full shrink-0 bg-[#CBDCDC] border border-solid border-[#FFFFFF] size-11" />
					<div className="content-center text-[12px] tracking-[-0.04em] leading-[150%] text-center w-fit font-['Poppins',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
						Facebook
					</div>
				</div>
				<div className="flex overflow-clip flex-col items-center gap-[2.5px] justify-center">
					<div className="rounded-full shrink-0 bg-[#CBDCDC] border border-solid border-[#FFFFFF] size-11" />
					<div className="content-center text-[12px] tracking-[-0.04em] leading-[150%] text-center w-fit font-['Poppins',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
						Facebook
					</div>
				</div>
			</div>
		</CardContainer>
	);
}
