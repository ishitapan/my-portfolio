const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-500 to-teal-600 text-white pt-20 pb-5 px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between border-b border-teal-400 pb-16">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Ishita Pan</h2>
                    <p className="text-sm leading-relaxed text-teal-100">
                        A Backend Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Social</h2>
                    <div className="flex gap-6">
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/ishitapan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-teal-100 hover:scale-110 transition duration-300" title="LinkedIn">
                            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ishita_pan21/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-teal-100 hover:scale-110 transition duration-300" title="Instagram">
                            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                            </svg>
                        </a>
                        {/* Email */}
                        <a href="mailto:panishita21@gmail.com" className="w-10 h-10 bg-white rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-teal-100 hover:scale-110 transition duration-300" title="Email">
                            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 text-[10px] text-teal-100 uppercase tracking-widest">
                © Copyright 2024. Made by <span className="underline font-bold text-white">Ishita Pan</span>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </footer>
    );
};

export default Footer;