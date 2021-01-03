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
            <Link href={`/blogs/?slug=${blog.slug}`}>
              <a>{blog.title}</a>
            </Link>
          </h1>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://strapi-mongodb-blog.herokuapp.com/blogs`);
  const blogs = await res.json();
  return {
    props: { blogs },
  };
}
