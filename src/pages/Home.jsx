import { useState } from "react";
import Navbar from "../layouts/navbar/Navbar";
import BlogCard from "../components/blogCard/BlogCard";
import { useSelector } from "react-redux";
import Searchbar from "../components/searchbar/Searchbar";
import {motion } from "framer-motion";
import "./home.css";

export default function Home() {
  const blogs = useSelector((state) => state.blogs);

  const [query, setQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="homePage"
    >
      <Navbar />

      <main className="home-main">
        <Searchbar Query={{ query, setQuery }} />

          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}

        {filteredBlogs.length === 0 && (
          <div className="no-results">no results found !</div>
        )}
      </main>
    </motion.div>
  );
}
