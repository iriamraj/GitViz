export default function HeroHeading() {
	return (
		<div className="max-w-232 text-center flex flex-col gap-3.5 justify-center items-center">
			<h1 className="font-geist tracking-[-0.2%] text-[min(8vw,60px)] leading-[min(8vw,60px)]">
				Transform Your Github Profile Into a
				<span className="text-(--colorPurple)"> Visual Masterpiece</span>
			</h1>
			<p className="w-[95%] max-w-153 font-inter font-medium leading-[150%] text-(--colorText) text-[min(4vw,18px)]">
				Drop any GitHub username, URL and instantly generate a beautiful, shareable
				visualization of their repositories, languages, and contribution history.
			</p>
		</div>
	);
}
