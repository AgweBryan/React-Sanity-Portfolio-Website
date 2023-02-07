import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () =>
      await client
        .fetch(
          `*[_type == 'post' && slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            },
            body,
              "authorName": author->name,
              "authorImage": author->image
            
            }`
        )
        .then((data) => {
          console.log(data);
          setSinglePost(data[0]);
        })
        .catch(console.error);

    fetchData();
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="font-amatic text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage)}
                  alt={singlePost.authorName}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-amatic items-center pl-2 text-2xl">
                  {singlePost.authorName}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t h-[400px]"
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="likc2o21"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
