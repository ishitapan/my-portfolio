import { useState } from 'react';

const Hero = () => {
    const [showResume, setShowResume] = useState(false);

    return (
        <>
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
                    <div className="flex gap-6 justify-center">
                        <a href="#projects" className="inline-block bg-white text-teal-600 px-12 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-teal-50 transition duration-300 shadow-xl hover:shadow-2xl">
                            Projects
                        </a>
                        <button onClick={() => setShowResume(true)} className="inline-block bg-white text-teal-600 px-12 py-4 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-teal-50 transition duration-300 shadow-xl hover:shadow-2xl">
                            See My Resume
                        </button>
                    </div>
                </div>
            </section>

            {/* Resume Modal/Popup */}
            {showResume && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4">
                    <div className="bg-gradient-to-b from-teal-50 to-teal-100 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] relative border-8 border-white">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowResume(false)}
                            className="absolute top-4 right-4 bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-700 transition duration-300 z-10"
                        >
                            ✕
                        </button>

                        {/* Resume PDF Viewer */}
                        <iframe
                            src={new URL('../assets/Ishita_Pan_Backend_Engineer_Resume .pdf', import.meta.url).href}
                            className="w-full h-[85vh] rounded-lg"
                            title="Ishita Pan Resume"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;