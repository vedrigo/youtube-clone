import { MdHomeFilled, MdMovie, MdOutlineVideoLibrary } from "react-icons/md";
import routes from "../../routes";
import { GuideEntry } from "./guide-entry";

export const AppDrawer = () => {
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-60">
      <div id="guide-spacer" className="mt-14"></div>
      <div id="guide-content">
        <div className="mr-3 p-3">
          <GuideEntry
            title="Home"
            icon={<MdHomeFilled />}
            href={routes.home.path()}
          />
          <GuideEntry
            title="Shorts"
            icon={<MdOutlineVideoLibrary />}
            href={routes.shorts.videoId.path({ videoId: "123" })}
          />
          <GuideEntry
            title="Subscription"
            icon={<MdMovie />}
            href={routes.feed.subscriptions.path()}
          />
        </div>
      </div>
    </div>
  );
};
