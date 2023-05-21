const routes = {
  home: { path: "/" },
  feed: {
    subscriptions: {
      path: "/feed/subscriptions",
    },
  },
  watch: {
    path: "/watch",
  },
  shorts: {
    videoId: {
      path: "/shorts/[videoId]",
    },
  },
};

export default routes;
