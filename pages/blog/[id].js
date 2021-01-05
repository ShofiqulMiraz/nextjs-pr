import Head from "next/head";
import Image from "next/image";

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
        <Image
          src={blog.image[0].url}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          src={blog.image[1].url}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://strapi-cloudinary.herokuapp.com/blogs/${params.id}`
  );
  const blog = await res.json();

  return {
    props: { blog },
  };
}
