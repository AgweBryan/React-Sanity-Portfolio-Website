import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";
const Posts = () => {
  const [postsData, setPostsData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch(
          `*[_type == "post"]{
           title,
           slug,
           mainImage{
            asset->{
                _id,
                url
            },
            alt
          }
       }`
        )
        .then((data) => setPostsData(data))
        .catch(console.error);
    };

    fetchData();
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center font-amatic">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsData &&
            postsData.map((post, index) => (
              <article>
                <Link to={`/React-Sanity-Portfolio-Website/post/${post.slug.current}`} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-x-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className=" absolute h-max right-0 bottom-0 w-max  justify-end items-end pr-4 pb-4">
                      <h3 className=" text-lg px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Posts;
