import Head from "next/head";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1> {blog.title} </h1>
        <p>{blog.description}</p>
        by <p> {blog.author} </p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`${BACKEND_URL}/api/posts/${params.id}`);
  const blog = await res.json();

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blog },
  };
}
