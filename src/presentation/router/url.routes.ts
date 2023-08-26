export const URL_ROUTES = {
  public: {
    auth: {
      path: "/auth/*",
      login: {
        path: "/login",
        fullPath: "/auth/login",
      },
    },
  },
  private: {
    chat: {
      path: "/chat/*",
      fullPath: "/chat",
    },
  },
};
