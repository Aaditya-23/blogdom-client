import Navbar from "../layouts/Navbar/Navbar";
import BlogCard from "../components/blogCard/BlogCard";
import { useSelector } from "react-redux";
import "./home.css";

export default function Home() {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="homePage">
      <Navbar />

      <main>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </main>
    </div>
  );
}
