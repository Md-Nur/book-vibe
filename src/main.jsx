import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Book from "./Components/Book/Book";
import "./index.css";
import Root from "./routes/root";
import ListedBooks from "./Components/ListedBooks/ListedBooks"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/book/:id",
        loader: () => fetch("data.json"),
        element: <Book />,
      },
      {
        path: "/listed-books",
        // loader: async () => fetch("data.json"),
        element: <ListedBooks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
