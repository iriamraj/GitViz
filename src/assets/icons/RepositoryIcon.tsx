import type { IconType } from "../../Pages/dashboard/types/IconType";

export function RepositoryOutlineIcon({ fillColor, className }: IconType) {
	return (
		<svg
			className={className}
			width="46"
			height="64"
			viewBox="0 0 46 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M44 45V4C44 2.89543 43.1046 2 42 2H4C2.89543 2 2 2.89543 2 4V45M44 45H2M44 45V55.5C44 56.6046 43.1046 57.5 42 57.5H24M2 45V55.5C2 56.6046 2.89543 57.5 4 57.5H7"
				stroke={fillColor}
				strokeWidth="4"
			/>
			<path
				d="M12.5 61.5V52.5C12.5 51.9477 12.9477 51.5 13.5 51.5H17C17.5523 51.5 18 51.9477 18 52.5V61.5V64"
				stroke={fillColor}
				strokeWidth="4"
			/>
			<path d="M10.5 10V14" stroke={fillColor} strokeWidth="4" />
			<path d="M10.5 21V25" stroke={fillColor} strokeWidth="4" />
			<path d="M10.5 33V37" stroke={fillColor} strokeWidth="4" />
		</svg>
	);
}

export function RepositoryFillIcon({ fillColor, className }: IconType) {
	return (
		<svg
			className={className}
			width="46"
			height="64"
			viewBox="0 0 46 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 4C2 2.89543 2.89543 2 4 2H42C43.1046 2 44 2.89543 44 4V45H2V4Z"
				fill="white"
			/>
			<path
				d="M44 45V4C44 2.89543 43.1046 2 42 2H4C2.89543 2 2 2.89543 2 4V45M44 45H2M44 45V55.5C44 56.6046 43.1046 57.5 42 57.5H24M2 45V55.5C2 56.6046 2.89543 57.5 4 57.5H7"
				stroke={fillColor}
				strokeWidth="4"
			/>
			<path
				d="M12.5 61.5V52.5C12.5 51.9477 12.9477 51.5 13.5 51.5H17C17.5523 51.5 18 51.9477 18 52.5V61.5V64"
				stroke={fillColor}
				strokeWidth="4"
			/>
			<path d="M10.5 10V14" stroke={fillColor} strokeWidth="4" />
			<path d="M10.5 21V25" stroke={fillColor} strokeWidth="4" />
			<path d="M10.5 33V37" stroke={fillColor} strokeWidth="4" />
		</svg>
	);
}
