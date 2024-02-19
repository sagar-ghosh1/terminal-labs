import Main from "@/Layouts/Main";
import Home from "@/Pages/Home/Home";
import NotFound from "@/Pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
