const BASE_URL = "http://mywp.passivegrow.com/wp-json/wp/v2";

export async function getPosts() {
  const postRes = await fetch(BASE_URL + "/posts");
  const posts = await postRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug === slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getEvent(slug) {
  const events = await getEvents();
  const eventArray = events.filter((event) => event.slug === slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + "/events");
  const events = await eventsRes.json();
  return events;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "post":
      elements = await getPosts();
      break;
    case "event":
      elements = await getEvents();
      break;
  }

  const elementSlugs = elements.map((el) => {
    return {
      params: { slug: el.slug },
    };
  });

  return elementSlugs;
}

export async function getMedia() {
  const mediaRes = await fetch(BASE_URL + "/media");
  const media = await mediaRes.json();
  return media;
}

export function getFeaturedMedia(media, id) {
  const featuredMediaArray = media.filter((el) => el.id === id);
  return featuredMediaArray.length > 0 ? featuredMediaArray[0] : null;
}
