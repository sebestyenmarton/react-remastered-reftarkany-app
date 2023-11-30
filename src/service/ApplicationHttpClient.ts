const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    // The live environment base URL
    return "http://beta.reftarkany.hu/refapi";
  } else {
    // The local environment base URL
    return "http://localhost/refapi";
  }
};

export default getBaseUrl;
