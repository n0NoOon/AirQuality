import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
    { basename: import.meta.env.DEV ? "/" : "/AirQuality/" }
  );

  return <RouterProvider router={router} />;
}

export default App;
