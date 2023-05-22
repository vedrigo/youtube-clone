import routes from "../../routes";
import { MaterialIcon } from "../material-icon";
import { SvgIcon } from "../svg-icon";
import { GuideEntry } from "./guide-entry";

export const AppDrawer = () => {
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-60">
      <div id="guide-spacer" className="mt-14"></div>
      <div id="guide-content">
        <div className="mr-3 p-3">
          <GuideEntry
            title="Home"
            icon={<MaterialIcon icon="home_filled" />}
            href={routes.home.path()}
          />
          <GuideEntry
            title="Shorts"
            icon={<SvgIcon icon="shorts" className="h-6" />}
            href={routes.shorts.videoId.path({ videoId: "123" })}
          />
          <GuideEntry
            title="Subscriptions"
            icon={<MaterialIcon icon="subscriptions" />}
            href={routes.feed.subscriptions.path()}
          />
          <GuideEntry
            title="Originals"
            icon={<MaterialIcon icon="folder" />}
            href={routes.channel.channelId.path({ channelId: "originals" })}
          />
          <GuideEntry
            title="YouTube Music"
            icon={<MaterialIcon icon="folder" />}
            href={routes.external.youtube.music.link()}
            target="_blank"
          />
          <GuideEntry
            title="Library"
            icon={<MaterialIcon icon="video_library" />}
            href={routes.feed.library.path()}
          />
        </div>
      </div>
    </div>
  );
};
