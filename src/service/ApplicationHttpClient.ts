const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    // The live environment base URL
    return "https://beta.reftarkany.hu/refapi";
  } else {
    // The local environment base URL
    return "https://localhost/refapi";
  }
};

export default getBaseUrl;
