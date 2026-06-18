import gitIcon from "../../../../assets/icons/git-icon.svg";
import email from "../../../../assets/icons/email-icon.svg";
import instagram from "../../../../assets/icons/instagram-icon.svg";
import linkedin from "../../../../assets/icons/linkedin-icon.svg";
import useThemeStore from "../../store/ThemeStore";

export default function Footer() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <footer
      id="Footer"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-end gap-3">
            <img src={gitIcon} alt="" />
            <h2 className="">
              <span
                className={`font-geist text-3xl ${isDark ? "text-(--colorPurpleDark)" : "text-(--colorPurple)"} transition-colors duration-300`}
              >
                Git
              </span>
              <span className="font-inter text-2xl font-bold text-(--colorAsh)">
                viz
              </span>
            </h2>
          </div>
          <p
            className={`mt-4 w-60 text-center leading-7 md:text-start ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
          >
            Transforming GitHub profiles visual masterpieces.
          </p>
        </div>

        <div className="mt-auto">
          <h4
            className={`${isDark && "text-(--colorHeadingDark)"} transition-colors duration-300`}
          >
            Contacts
          </h4>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex gap-10">
              <div
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img src={email} alt="" className="w-5" />
                ir.iamraj@gmail.com
              </div>
              <div
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img src={gitIcon} alt="" className="w-5" />
                @iriamraj
              </div>
            </div>
            <div className="flex gap-10">
              <div
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img src={instagram} alt="" className="w-5" />
                @jamat_ali_mallick
              </div>
              <div
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img src={linkedin} alt="" className="w-5" />
                jamat-ali-mallick
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mt-8 mb-5 flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
      >
        <img src={gitIcon} alt="" className="w-5" />
        <p>Source Code</p>
      </div>
    </footer>
  );
}
