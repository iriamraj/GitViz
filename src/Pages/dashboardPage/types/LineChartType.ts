interface LineItem {
	label: string;
	data: number[];
	color: string;
}

export interface LineChartType {
	lines: LineItem[];
	XAxisLabel: string[];
}
