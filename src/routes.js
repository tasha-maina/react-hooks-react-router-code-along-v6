import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
