import Image from "next/image";
import Event from "../components/Event";
import Layout from "../components/Layout";
import Post from "../components/Post";

import {
  getPosts,
  getEvents,
  getMedia,
  getFeaturedMedia,
} from "../utils/wordpress";

export default function Home({ posts, events, media }) {
  const jsxPosts = posts.map((post) => {
    const featuredMediaId = post.featured_media;
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });
  const jsxEvents = events.map((event) => {
    const featuredMediaId = event.featured_media;
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <Event event={event} featuredMedia={featuredMedia} key={event.id} />;
  });

  return (
    <Layout>
      <div className="row">
        <div className="col-lg-8">
          <h2 className="pb-3">Our blog posts</h2>
          {jsxPosts}
        </div>
        <div className="col-lg-4">
          <h2 className="pb-3">Events</h2>
          {jsxEvents}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  const events = await getEvents();
  const media = await getMedia();

  return {
    props: {
      posts,
      events,
      media,
    },
    revalidate: 10,
  };
};
