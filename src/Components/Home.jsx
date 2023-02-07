import image from "../images/blog-hero.jpg";

const Home = () => {
  return (
    <main>
      <img src={image} alt="blog-hero" className="absolute h-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 mx-auto uppercase font-bold font-amatic leading-none lg:leading-snug">
          Hello 👋, I'm Agwe.
        </h1>
      </section>
    </main>
  );
};

export default Home;
