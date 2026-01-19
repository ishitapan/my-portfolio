const Hero = () => {
    return (
        <section className="h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase text-white drop-shadow-lg">
                    Hey, I'm Ishita Pan
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-3xl mb-10 leading-relaxed drop-shadow-md font-semibold">
                    A Result-Oriented Software Engineer building and managing Websites and Web Applications that leads to the success of the overall product.
                </p>
                <a href="#projects" className="inline-block bg-white text-teal-600 px-12 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-teal-50 transition duration-300 shadow-xl hover:shadow-2xl">
                    Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;