import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { fetchBlogs } from "./services/Api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogs } from "./redux/BlogSlice";
import AddBlog from "./pages/AddBlog";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/addBlog" element={<AddBlog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Home />} />
    </>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs().then((blogs) => dispatch(getBlogs(blogs)));
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
