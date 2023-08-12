import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/home-page/home-page";
import RecordingsPage from "./components/pages/recordings-page/recordings-page";
import OccasionsPage from "./components/pages/occasions-page/occasions-page";
import ContactPage from "./components/pages/contact-page/contact-page";
import AdvertisersPage from "./components/pages/advertisers-page/advertisers-page";
import AboutTheChirch from "./components/pages/about-the-chirch-page/about-the-chirch-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/egyhazkozsegunkrol" element={<AboutTheChirch />} />
      </Routes>
      <Routes>
        <Route path="/hirdetesek" element={<AdvertisersPage />} />
      </Routes>
      <Routes>
        <Route path="/elerhetoseg" element={<ContactPage />} />
      </Routes>
      <Routes>
        <Route path="/alkalmaink" element={<OccasionsPage />} />
      </Routes>
      <Routes>
        <Route path="/felvetelek" element={<RecordingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
