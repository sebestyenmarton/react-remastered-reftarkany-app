import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/fooldal/home-page";
import RecordingsPage from "./components/pages/felvetelek-page/recordings-page";
import OccasionsPage from "./components/pages/alkalmaink-page/occasions-page";
import ContactPage from "./components/pages/elerhetoseg-page/contact-page";
import AdvertisersPage from "./components/pages/hirdetesek-page/advertisers-page";
import AboutTheChirch from "./components/pages/egyhazkozsegunkrol-page/about-the-chirch-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/egyhazkozsegunkrol" element={<AboutTheChirch />} />
        <Route path="/hirdetesek" element={<AdvertisersPage />} />
        <Route path="/elerhetoseg" element={<ContactPage />} />
        <Route path="/alkalmaink" element={<OccasionsPage />} />
        <Route path="/felvetelek" element={<RecordingsPage />} />
        {/* <Route
          path="*"
          element={<div> Not Found or You do not have permission.</div>}
        />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
