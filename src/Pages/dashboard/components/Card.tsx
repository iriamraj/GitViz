import type { CardType } from "../types/CardType";

export default function Card({ className, children }: CardType) {
  return (
    <div
      className={`flex flex-col gap-1 md:overflow-hidden rounded-[10px] border border-white bg-(--colorBox) px-3 py-2 text-[12px] text-[#47484B] shadow-[0_4px_3px_1px_#00000030] ${className}`}
    >
      {children}
    </div>
  );
}
