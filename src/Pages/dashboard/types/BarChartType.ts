interface bar {
  label: string;
  color: string;
  borderRadius: boolean;
  data: number[];
}

export interface BarChartType {
  bars: bar[];
  XAxisLabel: string[];
}
