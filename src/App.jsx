import "./App.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Reviews />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
