const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase">
                Hey, I'm Ishita Pan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
                A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
            </p>
            <a href="#projects" className="bg-blue-600 text-white px-12 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-blue-700 transition duration-300 shadow-lg">
                Projects
            </a>
        </section>
    );
};

export default Hero;