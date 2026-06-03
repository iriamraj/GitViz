export default function HeroHeading() {
	return (
		<div className="w-232 text-center flex flex-col gap-3.5 justify-center items-center">
			<h1 className="font-geist text-6xl tracking-[-0.2%]">
				Transform Your Github Profile Into a
				<span className="text-(--colorPurple)">Visual Masterpice</span>
			</h1>
			<p className="w-153 font-inter font-medium text-[18px] leading-[150%] text-(--colorText)">
				Drop any GitHub username, URL and instantly generate a beautiful, shareable
				visualization of their repositories, languages, and contribution history.
			</p>
		</div>
	);
}
