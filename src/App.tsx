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
      <Routes>
        <Route
          path="*"
          element={<div> Not Found or You do not have permission.</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
