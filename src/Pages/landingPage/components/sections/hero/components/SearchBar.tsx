import useThemeStore from "../../../../store/ThemeStore";
import { SearchInputStore } from "../../../../store/SearchInputStore";
import { useShallow } from "zustand/shallow";
import { motion } from "framer-motion";

export default function SearchBar() {
  const isDark = useThemeStore((state) => state.isDark);

  const { searchInput, setSearchInput } = SearchInputStore(
    useShallow((state) => ({
      searchInput: state.searchInput,
      setSearchInput: state.setSearchInput,
    })),
  );

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="font-inter mt-[min(5vw,40px)] flex w-[95%] max-w-185.25 flex-col items-center gap-[min(4vw,31px)] font-medium md:flex-row"
    >
      <div className="h-[min(11vw,47px)] w-[95%] max-w-131.75 rounded-full border border-(--colorBorder) bg-(--colorBox) shadow-[0_4px_3px_1px_#00000030]">
        <input
          type="text"
          name="urlInput"
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter a GitHub username or url..."
          className="h-full w-full px-5 text-[min(3.7vw,17px)] text-[#00000090] outline-none placeholder:text-[#00000047]"
        />
      </div>
      <button
        type="submit"
        className={`h-[min(9vw,47px)] w-[min(33vw,162px)] cursor-pointer rounded-full text-[min(3.3vw,16px)] font-semibold text-(--colorBox) shadow-[0_0_10px_5px_#6F60B530] ${isDark ? "bg-(--colorPurpleLight)" : "bg-(--colorPurple)/90"}`}
      >
        Visualize Now
      </button>
    </motion.form>
  );
}
