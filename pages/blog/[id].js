import Head from "next/head";
import { Card } from "antd";

export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card title={blog.title} style={{ width: 300 }}>
        <p>{blog.description}</p>
        by <p> {blog.author} </p>
      </Card>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://strapi-mongodb-blog.herokuapp.com/blogs/${params.id}`
  );
  const blog = await res.json();
  return {
    props: { blog },
  };
}
