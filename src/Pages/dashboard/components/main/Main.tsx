import Achievement from "./Achievement";
import Activity from "./Activity";
import Contribution from "./Contribution";
import ContributionStrick from "./ContributionStrick";
import Export from "./Export";
import Gists from "./Gists";
import Issues from "./Issues";
import Language from "./Language";
import Organization from "./Organization";
import ProfileCard from "./ProfileCard";
import PullRequest from "./PullRequest";
import Skills from "./Skills";
import Stats from "./Stats";

export default function Main() {
  return (
    <main className="flex h-full w-full flex-col gap-3 rounded-3xl md:p-2 xl:overflow-hidden">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex flex-col gap-3">
          <ProfileCard />
          <Achievement />
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <Stats />
            <Contribution />
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Organization />
            <Gists />
            <ContributionStrick />
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Language />
            <Activity />
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <PullRequest />
            <Issues />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full gap-3 flex-col md:flex-row pb-5 md:pb-0 ">
        <Export />
        <Skills />
      </div>
    </main>
  );
}
