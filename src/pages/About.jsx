const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        "Embrace Modesty, Elevate Style." At [Your Store Name], we bring you a
        thoughtfully curated collection of modest and elegant Islamic attire for
        men, women, and kids. From traditional thobes and abayas to contemporary
        modest wear, our designs blend faith, fashion, and comfort. With a
        commitment to quality, authenticity, and timeless modesty, we ensure
        that every piece reflects Islamic values while keeping up with modern
        trends. Whether for everyday wear, special occasions, or prayer, our
        collection is designed to inspire confidence and grace. Dress with
        purpose. Shop with faith. 🕌✨
      </p>
    </>
  );
};
export default About;
