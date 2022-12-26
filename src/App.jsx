import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { fetchBlogs, verifyAdmin } from "./services/Api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogs } from "./redux/blogSlice";
import {
  setOldAdmin,
  verifyAdmin as reduxVerifyAdmin,
} from "./redux/adminSlice";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/Admin/AdminLogin";
import WriteBlog from "./pages/Admin/WriteBlog";
import UpdateBlog from "./pages/Admin/UpdateBlog";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/writeblog" element={<WriteBlog />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/updateBlog/:id" element={<UpdateBlog />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetchBlogs().then((blogs) => dispatch(getBlogs(blogs)));
    dispatch(setOldAdmin());
    verifyAdmin(token).then((isVerfied) =>
      dispatch(reduxVerifyAdmin(isVerfied))
    );
  }, []);

  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
