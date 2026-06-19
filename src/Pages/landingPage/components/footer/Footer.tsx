import gitIcon from "../../../../assets/icons/git-icon.svg";
import email from "../../../../assets/icons/email-icon.svg";
import instagram from "../../../../assets/icons/instagram-icon.svg";
import linkedin from "../../../../assets/icons/linkedin-icon.svg";
import useThemeStore from "../../store/ThemeStore";
import { motion } from "framer-motion";

export default function Footer() {
  const isDark = useThemeStore((state) => state.isDark);
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      id="Footer"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-end gap-3">
            <img src={gitIcon} alt="git" fetchPriority="low" loading="lazy" />
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
              <a
                href="mailto:ir.iamraj@gmail.com"
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} cursor-pointer transition-colors duration-300`}
              >
                <img
                  src={email}
                  alt="email"
                  className="w-5"
                  fetchPriority="low"
                  loading="lazy"
                />
                ir.iamraj@gmail.com
              </a>
              <a
                href="https://github.com/iriamraj"
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img
                  src={gitIcon}
                  alt="git"
                  className="w-5"
                  fetchPriority="low"
                  loading="lazy"
                />
                @iriamraj
              </a>
            </div>
            <div className="flex gap-10">
              <a
                href="https://www.instagram.com/jamat_ali_mallick"
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-5"
                  fetchPriority="low"
                  loading="lazy"
                />
                @jamat_ali_mallick
              </a>
              <a
                href="https://www.linkedin.com/in/jamat-ali-mallick"
                className={`flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-5"
                  fetchPriority="low"
                  loading="lazy"
                />
                jamat-ali-mallick
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/iriamraj/GitViz"
        className={`mt-8 mb-5 flex items-center gap-3 ${isDark && "text-(--colorTextDark)"} transition-colors duration-300`}
      >
        <img
          src={gitIcon}
          alt="git"
          className="w-5"
          fetchPriority="low"
          loading="lazy"
        />
        <p>Source Code</p>
      </a>
    </motion.footer>
  );
}
