// src/Pages/dashboardPage/components/routes/repositories/repository/cards/LanguageBar.tsx

interface LanguageBarProps {
	languages?: { name: string; percent: number; color: string }[];
}

const defaultLanguages = [
	{ name: "TypeScript", percent: 68.5, color: "#3178c6" },
	{ name: "CSS", percent: 21.2, color: "#563d7c" },
	{ name: "HTML", percent: 10.3, color: "#e34c26" },
];

export default function LanguageBar({ languages = defaultLanguages }: LanguageBarProps) {
	return (
		<div className="w-full bg-(--colorForeground) border border-(--colorDashBorder) rounded-2xl p-4 flex flex-col gap-3">
			<div className="flex items-center justify-between text-xs font-semibold text-(--colorText)">
				<span>Languages</span>
				<span className="text-(--colorTextLight)">{languages.length} Detected</span>
			</div>

			{/* Segmented Progress Bar */}
			<div className="w-full h-2.5 rounded-full overflow-hidden flex bg-(--colorDashBorder)">
				{languages.map((lang, idx) => (
					<div
						key={idx}
						style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
						className="h-full transition-all duration-300"
						title={`${lang.name}: ${lang.percent}%`}
					/>
				))}
			</div>

			{/* Legend */}
			<div className="flex flex-wrap gap-4 text-xs font-medium text-(--colorTextLight) pt-1">
				{languages.map((lang, idx) => (
					<div key={idx} className="flex items-center gap-1.5">
						<span
							className="w-2.5 h-2.5 rounded-full inline-block"
							style={{ backgroundColor: lang.color }}
						/>
						<span className="text-(--colorText)">{lang.name}</span>
						<span>{lang.percent}%</span>
					</div>
				))}
			</div>
		</div>
	);
}