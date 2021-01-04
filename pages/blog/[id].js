import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ blog }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "5ff12fd84a7b60228019938f" } },
      { params: { id: "5ff0aa0f24725e00179b3f97" } },
    ],

    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://strapi-mongodb-blog.herokuapp.com/blogs/${params.id}`
  );
  const blog = await res.json();

  return {
    props: { blog },
  };
}
