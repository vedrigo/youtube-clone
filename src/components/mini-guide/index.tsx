import routes from "../../routes";
import { mastHeadHeight } from "../masthead/consts";
import { MaterialIcon } from "../material-icon";
import { SvgIcon } from "../svg-icon";
import { MiniGuideEntry } from "./mini-guide-entry";

export const MiniGuide = () => {
  return (
    <div
      className={`w-64px top-56px fixed left-0 z-10`}
      style={{ height: `calc(100% - ${mastHeadHeight})` }}
    >
      <div id="guide-content">
        <div className="mr-3 mt-1 px-1">
          <MiniGuideEntry
            title="Home"
            icon={<MaterialIcon icon="home_filled" />}
            href={routes.home.path()}
          />
          <MiniGuideEntry
            title="Shorts"
            icon={<SvgIcon icon="shorts" className="h-6" />}
            href={routes.shorts.videoId.path({ videoId: "123" })}
          />
          <MiniGuideEntry
            title="Subscriptions"
            icon={<MaterialIcon icon="subscriptions" />}
            href={routes.feed.subscriptions.path()}
          />
          <MiniGuideEntry
            title="Originals"
            icon={<MaterialIcon icon="folder" />}
            href={routes.channel.channelId.path({ channelId: "originals" })}
          />
          <MiniGuideEntry
            title="YouTube Music"
            icon={<MaterialIcon icon="folder" />}
            href={routes.external.youtube.music.link()}
            target="_blank"
          />
          <MiniGuideEntry
            title="Library"
            icon={<MaterialIcon icon="video_library" />}
            href={routes.feed.library.path()}
          />
        </div>
      </div>
    </div>
  );
};
