import { useEffect, useState } from "react";

const Header = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchBlogs = async () => {
    setloading(true);
    const res = await fetch(
      "https://mern-blog-back.herokuapp.com/api/v1/posts"
    );
    const blogs = await res.json();
    setblogs(blogs);

    setloading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <h1>header</h1>

      {loading ? (
        <>
          <p>loading posts....</p>
        </>
      ) : (
        <>
          {blogs.map((blog, index) => (
            <div className="blog" key={index}>
              <h1> {blog.title} </h1>
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
