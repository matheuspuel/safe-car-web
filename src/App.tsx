import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomeView } from "./views/Home";
import { SearchView } from "./views/Search";
import { SubscribeView } from "./views/Subscribe";

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/search",
      element: <SearchView />,
    },
    {
      path: "/subscribe",
      element: <SubscribeView />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default App;
