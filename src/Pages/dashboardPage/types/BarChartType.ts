export interface BarItem {
  label: string;
  data: number[];
  color: string;
  borderRadius?: boolean;
}

export interface BarChartType {
  bars: BarItem[];
  XAxisLabel: string[];
}