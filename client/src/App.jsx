import Layout from "./components/Layout";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import CreatePost from "./pages/CreatePost";
import CategoryPosts from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
// import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import Logout from "./pages/Logout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProvider from "./context/userProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "dashboard", element: <AuthorPosts /> },
      // { path: "myposts/:id", element: <Dashboard /> },
      // { path: "dashboard", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "posts/:id/delete", element: <DeletePost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
