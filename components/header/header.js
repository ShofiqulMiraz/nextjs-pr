import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import Link from "next/link";

const Header = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchBlogs = async () => {
    setloading(true);
    const res = await fetch("/api/posts");
    const blogs = await res.json();
    setblogs(blogs);

    setloading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const skeletonUI = () => (
    <>
      <Skeleton.Input style={{ width: 500, height: 20 }} active />
      <br />
      <Skeleton.Input style={{ width: 400, height: 20 }} active />
      <br />
      <Skeleton.Input style={{ width: 200, height: 20 }} active />
    </>
  );
  return (
    <>
      <h1>header</h1>

      {loading ? (
        <>
          {skeletonUI()}
          <div style={{ marginBottom: 30 }}></div>
          {skeletonUI()}
          <div style={{ marginBottom: 30 }}></div>
          {skeletonUI()}
          <div style={{ marginBottom: 30 }}></div>
          {skeletonUI()}
          <div style={{ marginBottom: 30 }}></div>
          {skeletonUI()}
          <div style={{ marginBottom: 30 }}></div>
        </>
      ) : (
        <>
          {blogs.map((blog, index) => (
            <div className="blog" key={index}>
              <Link href={`/blog/${blog._id}`}>
                <a>{blog.title}</a>
              </Link>
              <p> {blog.description} </p>
              <p> by {blog.author} </p>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default Header;
