// component
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
