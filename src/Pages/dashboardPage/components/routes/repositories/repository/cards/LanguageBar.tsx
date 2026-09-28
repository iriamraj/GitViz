import Card from "../../../../Card";
import { useRepoLanguages } from "../../../../../../../hooks/useGithub";

interface LanguageBarProps {
	repoName: string;
	username?: string;
}

export default function LanguageBar({ repoName, username }: LanguageBarProps) {
	const { data: languages = {}, isLoading } = useRepoLanguages(username, repoName);

	const totalBytes = Object.values(languages).reduce(
		(acc: number, bytes: any) => acc + Number(bytes),
		0,
	);

	if (isLoading) {
		return (
			<Card className="p-4 animate-pulse h-16">
				<div className="w-full h-full bg-(--colorDashBorder) rounded" />
			</Card>
		);
	}

	if (totalBytes === 0) return null;

	return (
		<Card className="p-4 flex flex-col gap-3">
			<h4 className="text-sm font-semibold text-(--colorText)">Languages</h4>
			<div className="w-full h-3 rounded-full overflow-hidden flex bg-(--colorDashBorder)">
				{Object.entries(languages).map(([lang, bytes], index) => {
					const percentage = ((Number(bytes) / totalBytes) * 100).toFixed(1);
					return (
						<div
							key={lang}
							style={{ width: `${percentage}%` }}
							className={`h-full ${getLanguageColorClass(index)}`}
							title={`${lang}: ${percentage}%`}
						/>
					);
				})}
			</div>
			<div className="flex flex-wrap gap-4 text-xs text-(--colorTextLight)">
				{Object.entries(languages).map(([lang, bytes]) => (
					<div key={lang} className="flex items-center gap-1.5">
						<span className="w-2.5 h-2.5 rounded-full bg-(--colorPurple)" />
						<span>{lang}</span>
						<span className="text-(--colorText)">
							{((Number(bytes) / totalBytes) * 100).toFixed(1)}%
						</span>
					</div>
				))}
			</div>
		</Card>
	);
}

function getLanguageColorClass(index: number) {
	const colors = [
		"bg-purple-500",
		"bg-blue-500",
		"bg-emerald-500",
		"bg-amber-500",
		"bg-rose-500",
		"bg-indigo-500",
	];
	return colors[index % colors.length];
}