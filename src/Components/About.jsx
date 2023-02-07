import { unstable_requirePropFactory } from "@mui/utils";
import React, { useEffect, useState } from "react";
import client from "../client";
import hero from "../images/blog-hero.jpg";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'author']{
        name,
        bio,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => {
        setAuthor(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="relative">
      <img src={hero} alt="Hero" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={author.authorImage}
            alt={author.name}
            className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="font-amatic text-6xl text-green-300 mb-4">
              Hey ther, I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="likc2o21"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
