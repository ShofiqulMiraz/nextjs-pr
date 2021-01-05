import Head from "next/head";
import Link from "next/link";

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {blogs.map((blog) => (
          <h1 key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </h1>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://strapi-cloudinary.herokuapp.com/blogs`);
  const blogs = await res.json();
  return {
    props: { blogs },
  };
}
