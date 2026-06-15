import gitIcon from "../../../../assets/icons/git-icon.svg";
import email from "../../../../assets/icons/email-icon.svg";
import instagram from "../../../../assets/icons/instagram-icon.svg";
import linkedin from "../../../../assets/icons/linkedin-icon.svg";

export default function Footer() {
	return (
		<footer id="Footer" className="w-full flex flex-col justify-center items-center mb-5	">
			<div className="flex flex-col gap-5 md:gap-20 md:flex-row">
				<div className=" flex flex-col items-center md:items-start">
					<div className="flex gap-3 items-end">
						<img src={gitIcon} alt="" />
						<h2 className="">
							<span className="font-geist text-(--colorPurple) text-3xl">Git</span>
							<span className="font-inter font-bold text-2xl text-(--colorAsh)">
								viz
							</span>
						</h2>
					</div>
					<p className="leading-7 w-60 mt-4 text-center md:text-start">
						Transforming GitHub profiles visual masterpieces.
					</p>
				</div>

				<div className="mt-auto">
					<h4>Contacts</h4>
					<div className="mt-2 flex flex-col gap-2">
						<div className="flex gap-10">
							<div className="flex items-center gap-3">
								<img src={email} alt="" className="w-5" />
								ir.iamraj@gmail.com
							</div>
							<div className="flex items-center gap-3">
								<img src={gitIcon} alt="" className="w-5" />
								@iriamraj
							</div>
						</div>
						<div className="flex gap-10">
							<div className="flex items-center gap-3">
								<img src={instagram} alt="" className="w-5" />
								@jamat_ali_mallick
							</div>
							<div className="flex items-center gap-3">
								<img src={linkedin} alt="" className="w-5" />
								jamat-ali-mallick
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 flex items-center gap-3">
				<img src={gitIcon} alt="" className="w-5" />
				<p>Source Code</p>
			</div>
		</footer>
	);
}
