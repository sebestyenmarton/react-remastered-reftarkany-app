import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* import AboutTheChirchPage from "./pages/about-the-church-page/about-the-church-page";
import AdvertisersPage from "./pages/advertisers-page/advertisers-page";
import ContactPage from "./pages/contact-page/contact-page"; */
import HomePage from "./components/pages/home-page/home-page";
/* import OccasionsPage from "./pages/occasions-page/occasions-page";
import RecordingsPage from "./pages/recordings-page/recordings-page";
import TestPage from "./pages/test-page"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/*       <Routes>
        <Route path="/about-the-chirch" element={<AboutTheChirchPage />} />
      </Routes>
      <Routes>
        <Route path="/advertisers" element={<AdvertisersPage />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Routes>
        <Route path="/occasions" element={<OccasionsPage />} />
      </Routes>
      <Routes>
        <Route path="/recordings" element={<RecordingsPage />} />
      </Routes>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
