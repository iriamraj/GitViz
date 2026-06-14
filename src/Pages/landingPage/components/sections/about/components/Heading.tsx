import type { AboutHeadingType } from "../../../../types/AboutHeadingType";

export default function Heading({ heading, headingColor, children }: AboutHeadingType) {
	return (
		<div className="text-center flex flex-col gap-4 mt-15 md:mt-20">
			<div>
				<h2 className="text-3xl font-geist">
					<span>{heading}</span>
					<span className="text-(--colorPurple)"> {headingColor}</span>
				</h2>
			</div>

			<p className="max-w-280 text-(--colorText)">{children}</p>
		</div>
	);
}
