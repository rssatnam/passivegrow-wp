import Link from "next/link";
import Layout from "../../components/Layout";

import { getEvent, getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ event }) {
  return (
    <Layout title={event.title.rendered}>
      <h1 className="text-center pb-5">{event.title.rendered}</h1>
      <div
        className="card-text pb-5"
        dangerouslySetInnerHTML={{ __html: event.content.rendered }}
      ></div>
      <Link href="/">
        <a className="btn btn-primary">Back to Home</a>
      </Link>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = await getSlugs("events");
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const event = await getEvent(params.slug);
  return {
    props: {
      event,
    },
    revalidate: 10,
  };
};
