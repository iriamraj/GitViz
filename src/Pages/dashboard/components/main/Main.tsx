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
    <main className="flex h-full w-full flex-col gap-3 overflow-hidden rounded-3xl p-2">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <ProfileCard />
          <Achievement />
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex gap-3">
            <Stats />
            <Contribution />
          </div>
          <div className="flex gap-3">
            <Organization />
            <Gists />
            <ContributionStrick />
          </div>
          <div className="flex gap-3">
            <Language />
            <Activity />
          </div>
          <div className="flex gap-3">
            <PullRequest />
            <Issues />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full gap-3">
        <Export />
        <Skills />
      </div>
    </main>
  );
}
