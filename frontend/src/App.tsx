import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import LandingPage from "./pages/LandingPage";
import Feed from "./components/Feed";
import PinDetails from "./components/PinDetails";
import CreatePin from "./components/CreatePin";
import Search from "./components/Search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/feed",
      element: <Feed />,
    },
    {
      path: "/category/:categoryId",
      element: <Feed />,
    },
    {
      path: "/pin-details/:pinId",
      element: <PinDetails />,
    },
    {
      path: "/create-pin",
      element: <CreatePin />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
