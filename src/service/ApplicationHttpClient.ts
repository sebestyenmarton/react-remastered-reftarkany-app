const urls = {
  getBaseUrl: () => {
    if (process.env.NODE_ENV === "production") {
      // The live environment base URL
      return "https://beta.reftarkany.hu/refapi";
    } else {
      // The local environment base URL
      return "http://localhost/refapi";
    }
  },
  getRootUrl: () => {
    if (process.env.NODE_ENV === "production") {
      // The live environment base URL
      return "https://beta.reftarkany.hu";
    } else {
      // The local environment base URL
      return "http://localhost";
    }
  },
};

export default urls;
