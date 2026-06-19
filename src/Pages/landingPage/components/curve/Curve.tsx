import useThemeStore from "../../store/ThemeStore";
import type { CurveType } from "../../types/CurveType";

export default function Curve({ height, paddingTop }: CurveType) {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <>
      <div
        className={`curve top-0 flex h-45 w-full justify-center overflow-hidden pt-13 ${paddingTop} ${height}`} 
        style={{
        }}
      >
        <div
          className={`curve relative h-150 w-[300%] shrink-0 rounded-[50%] border border-(--colorPurple) shadow-[0_-5px_40px_#6f60b5] outline-2 outline-(--colorPurple)/40 md:w-[200%] lg:w-[180%] xl:w-[140%] ${
            isDark
              ? "border-4 border-(--colorPurpleDark) bg-(--colorBaseDark) md:shadow-[0_-15px_80px_#8A75EA,inset_0_5px_60px_0_#8A75EA]"
              : "border-3 border-(--colorPurple) bg-(--colorBase) md:shadow-[0_-15px_80px_#6f60b5]"
          } transition-colors duration-300`}
        ></div>
      </div>
    </>
  );
}
