import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import { formatDate } from '~/utils';
export default function Card({ post }) {
    return (<div className="card">
      {post.mainImage ? (<Image className="card__cover" src={urlForImage(post.mainImage).width(500).height(300).url()} height={300} width={500} alt=""/>) : (<div className="card__cover--none"/>)}
      <div className="card__container">
        <h3 className="card__title">
          <a className="card__link" href={`/post/${post.slug.current}`}>
            {post.title}
          </a>
        </h3>
        <p className="card__excerpt">{post.excerpt}</p>
        <p className="card__date">{formatDate(post._createdAt)}</p>
      </div>
    </div>);
}
