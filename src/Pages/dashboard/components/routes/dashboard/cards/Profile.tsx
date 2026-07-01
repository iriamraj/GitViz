import CardContainer from "../../../common/CardContainer";
import GithubIcon from "../../../../../../assets/icons/GithubIcon";
import EmailIcon from "../../../../../../assets/icons/EmailIcon";

export default function Profile() {
	return (
		<CardContainer className={"gap-3.5 w-68.5 h-126.5"}>
			<div className="flex overflow-clip flex-col items-end gap-0.5 justify-center self-stretch">
				<div className="flex overflow-clip rounded-tl-none items-center gap-2 w-23 h-8.25 justify-center rounded-bl-md shrink-0 bg-[#6F60B5]">
					<GithubIcon fillColor="white" className="w-5" />
					<div className="content-center font-['Poppins',system-ui,sans-serif] font-medium text-[#D7E8E9] text-sm/4.5">
						Github
					</div>
				</div>
			</div>
			<div className="flex overflow-clip flex-col items-center gap-3.5 px-3.5 self-stretch flex-1">
				<div className="overflow-clip w-33.25 h-33.25 rounded-full shrink-0 border border-solid border-[#000000]" />
				<div className="content-center font-['Poppins',system-ui,sans-serif] font-medium text-[#1E1E21] text-[26px]/8">
					Jamat Ali Mallick
				</div>
				<div className="content-center text-[14px] tracking-[-0.04em] leading-[150%] text-center font-['Poppins',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
					I created cources that make learning things like JavaScript easy and fun.
				</div>
				<div className="flex overflow-clip flex-col items-start gap-2.25 self-stretch pl-2.5">
					<div className="flex overflow-clip items-center gap-2 justify-center">
						{/* <div className="rounded-md shrink-0] border border-solid border-[#FFFFFF] p-1"> */}
						<EmailIcon fillColor="#6f60b5" className="w-4" />
						{/* </div> */}
						<div className="content-center text-[12px] leading-[150%] text-center font-['Inter',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
							ir.iamraj@gamil.com
						</div>
					</div>
					<div className="flex overflow-clip items-center gap-2 justify-center">
						{/* <div className="rounded-md shrink-0 border border-solid border-[#FFFFFF] p-1 h-fit"> */}
							<EmailIcon fillColor="#6f60b5" className="w-4" />
						{/* </div> */}
						<div className="content-center text-[12px] leading-[150%] text-center font-['Inter',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
							@raj_mallick
						</div>
					</div>
					<div className="flex overflow-clip items-center gap-2 justify-center">
						{/* <div className="rounded-md shrink-0 border border-solid border-[#FFFFFF] p-1 h-fit"> */}
							<GithubIcon fillColor="#6f60b5" className="w-4 h-fit" />
						{/* </div> */}
						<div className="content-center text-[12px] leading-[150%] text-center font-['Inter',system-ui,sans-serif] flex justify-center flex-wrap text-[#53565A]">
							@iriamraj
						</div>
					</div>
				</div>
				<div className="flex overflow-clip items-start gap-6">
					<div className="flex overflow-clip flex-col items-center gap-1.5 justify-center">
						<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
							2564
						</div>
						<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#47484B] text-xs/4">
							Followers
						</div>
					</div>
					<div className="flex overflow-clip flex-col items-center gap-1.5 justify-center">
						<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
							2564
						</div>
						<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#47484B] text-xs/4">
							Followers
						</div>
					</div>
				</div>
				<div className="flex overflow-clip w-50.5 rounded-2xl flex-col items-center gap-5 px-14.75 py-5 justify-center h-10.75 shrink-0 bg-[#6F60B5]">
					<div className="content-center text-[16px] tracking-[-0.04em] leading-[150%] text-center w-fit font-['Poppins',system-ui,sans-serif] flex justify-center flex-wrap text-[#D7E8E9]">
						View More
					</div>
				</div>
			</div>
		</CardContainer>
	);
}
