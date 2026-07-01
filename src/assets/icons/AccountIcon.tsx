import type { IconType } from "../../Pages/dashboard/types/IconType";

export function AccountOutlineIcon({ fillColor, className }: IconType) {
	return (
		<svg
			className={className}
			width="46"
			height="50"
			viewBox="0 0 46 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.9252 3.78564C28.1887 3.78574 32.4896 8.09957 32.4897 13.4575C32.4897 18.8156 28.1888 23.1293 22.9252 23.1294C17.6616 23.1294 13.3608 18.8156 13.3608 13.4575C13.3608 8.09951 17.6617 3.78564 22.9252 3.78564Z"
				stroke={fillColor}
				strokeWidth="4"
			/>
			<path
				d="M22.9248 28.2605C33.3903 28.2605 42.1031 35.9578 43.7666 46.0828L43.8408 46.5662C43.9163 47.1024 43.4808 47.6052 42.9346 47.6052L2.91504 47.6042C2.36752 47.6042 1.9337 47.1007 2.00879 46.5681C3.4701 36.2038 12.2934 28.2605 22.9248 28.2605Z"
				stroke={fillColor}
				strokeWidth="4"
			/>
		</svg>
	);
}

export function AccountFillIcon({ fillColor, className }: IconType) {
	return (
		<svg
			className={className}
			width="46"
			height="50"
			viewBox="0 0 46 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.9252 3.78564C28.1887 3.78574 32.4896 8.09957 32.4897 13.4575C32.4897 18.8156 28.1887 23.1293 22.9252 23.1294C17.6616 23.1294 13.3607 18.8156 13.3607 13.4575C13.3608 8.09951 17.6616 3.78564 22.9252 3.78564Z"
				fill="white"
				stroke={fillColor}
				strokeWidth="4"
			/>
			<path
				d="M22.9248 28.2605C33.3903 28.2605 42.1031 35.9578 43.7666 46.0828L43.8408 46.5662C43.9163 47.1024 43.4808 47.6052 42.9346 47.6052L2.91504 47.6042C2.36752 47.6042 1.9337 47.1007 2.00879 46.5681C3.47011 36.2038 12.2934 28.2605 22.9248 28.2605Z"
				fill="#FFF5F5"
				stroke={fillColor}
				strokeWidth="4"
			/>
		</svg>
	);
}
