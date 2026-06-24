import profileIcon from "../../../../assets/icons/profile-icon.svg";
import repoIcon from "../../../../assets/icons/repo-icon.svg";
import overviewIcon from "../../../../assets/icons/overview-icon.svg";

const navIconsList = [
  {
    id: 1,
    name: "Overview",
    icon: overviewIcon,
  },
  {
    id: 2,
    name: "Repositories",
    icon: repoIcon,
  },
  {
    id: 3,
    name: "Profile",
    icon: profileIcon,
  },
  {
    id: 4,
    name: "Profile",
    icon: profileIcon,
  },
];

export default function Nav() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-7 py-6 [&>div]:w-10">
      {navIconsList.map((navIcon) => (
        <div key={navIcon.id} className="h-fit rounded-lg bg-[#27272759] p-2.5 cursor-pointer">
          <img src={navIcon.icon} alt={navIcon.name} />
        </div>
      ))}
    </div>
  );
}
