const routes = {
  feed: {
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
