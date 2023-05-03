import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/components/Layout";
import LoginPage from "../views/pages/LoginPage";
import { redirect } from "react-router-dom";
import BooksPage from "../views/pages/BooksPage";
import AddBookPage from "../views/pages/AddBookPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <BooksPage />,
      },
      {
        path: "/books/add",
        element: <AddBookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
