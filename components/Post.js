import Link from "next/link";
import Image from "next/image";
import { getDate } from "../utils/utils";

export default function Post({ post, featuredMedia }) {
  const postDate = getDate(post.modified);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 pt-4 text-center">
          <Link href={`/posts/${post.slug}`}>
            <a>
              <Image
                src={featuredMedia.media_details.sizes.full.source_url}
                width={180}
                height={120}
                alt={featuredMedia.alt_text}
              ></Image>
            </a>
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <p className="card-text">
              <small className="text-muted">On {postDate}</small>
            </p>
            <Link href={`/posts/${post.slug}`}>
              <a className="btn btn-primary">See more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
