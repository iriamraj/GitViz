import type { CardType } from "../../types/CardType";

export default function Card({
  borderRadius,
  width,
  height,
  children,
}: CardType) {
  return (
    <div
      className={`overflow-hidden border border-(--colorBorder) bg-(--colorBox) shadow-[0_4px_3px_1px_#00000030] ${width} ${height}  ${borderRadius}`}
    >
      {children}
    </div>
  );
}
