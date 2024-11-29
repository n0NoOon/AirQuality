import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import { SearchPage } from "./pages/Search/SearchPage";
import { searchLoader } from "./pages/Search/SearchLoader";
import { useState } from "react";
import { Average } from "./api/types/Average";

const [station, setStation] = useState<Average | undefined>(undefined);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home station={station} />,
      },
      {
        path: "/search",
        element: <SearchPage onStationClick={(d) => setStation(d)} />,
        loader: searchLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
