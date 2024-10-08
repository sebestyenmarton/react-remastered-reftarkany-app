import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./components/pages/fooldal/home-page";
import RecordingsPage from "./components/pages/felvetelek-page/recordings-page";
import OccasionsPage from "./components/pages/alkalmaink-page/occasions-page";
import ContactPage from "./components/pages/elerhetoseg-page/contact-page";
import AdvertisersPage from "./components/pages/hirdetesek-page/advertisers-page";
import AboutTheChirchPage from "./components/pages/egyhazkozsegunkrol-page/about-the-chirch-page";
import OthersPage from "./components/pages/egyeb-oldalak/others-page";

import store from "./redux/store";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} key="home" />
          <Route
            path="/egyhazkozsegunkrol"
            element={<AboutTheChirchPage key="about-the-chirch" />}
          />
          <Route
            path="/hirdetesek"
            element={<AdvertisersPage key="AdvertisersPage" />}
          />
          <Route
            path="/elerhetoseg"
            element={<ContactPage key="ContactPage" />}
          />
          <Route
            path="/alkalmaink"
            element={<OccasionsPage key="OccasionsPage" />}
          />
          <Route
            path="/felvetelek/:category/:subcategory?/:page/:pageSize"
            element={<RecordingsPage key="RecordingsPage" />}
          />
          <Route path="/egyebek/*" element={<OthersPage key="OtherPage" />} />
          {/* <Route
          path="*"
          element={<div> Not Found or You do not have permission.</div>}
        />*/}
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
