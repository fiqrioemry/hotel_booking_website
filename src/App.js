import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/room/:id", element: <RoomDetails /> },
]);

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
