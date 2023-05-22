const routes = {
  channel: {
    channelId: {
      path: ({ channelId }: { channelId: string }) => `/channel/${channelId}`,
    },
  },
  external: {
    youtube: {
      music: { link: () => "https://music.youtube.com/" },
    },
  },
  feed: {
    library: { path: () => "/feed/library" },
    subscriptions: {
      path: () => "/feed/subscriptions",
    },
  },
  home: { path: () => "/" },
  shorts: {
    videoId: {
      path: ({ videoId }: { videoId: string }) => `/shorts/${videoId}`,
    },
  },
  watch: {
    path: () => "/watch",
  },
};

export default routes;
