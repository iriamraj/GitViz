import type { CardHeadingType } from "../../types/CardHeadingType";

export default function CardHeading({ children }: CardHeadingType) {
  return <h3 className="h-fit text-[15px] text-black text-nowrap">{children}</h3>;
}
