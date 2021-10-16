import Link from "next/link";
import Layout from "../../components/Layout";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
  return (
    <Layout title={post.title.rendered}>
      <h1 className="text-center pb-5">{post.title.rendered}</h1>
      <div
        className="card-text pb-5"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <Link href="/">
        <a className="btn btn-primary">Back to Home</a>
      </Link>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = await getSlugs("posts");
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
