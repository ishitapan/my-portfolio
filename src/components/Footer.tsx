const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between border-b border-gray-800 pb-16">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Ram Maheshwari</h2>
                    <p className="text-sm leading-relaxed text-gray-300">
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-6 tracking-widest">Social</h2>
                    <div className="flex gap-4">
                        {/* Replace with actual social icons/links */}
                        <span className="w-6 h-6 bg-white rounded-full inline-block cursor-pointer"></span>
                        <span className="w-6 h-6 bg-white rounded-full inline-block cursor-pointer"></span>
                        <span className="w-6 h-6 bg-white rounded-full inline-block cursor-pointer"></span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 text-[10px] text-gray-400 uppercase tracking-widest">
                © Copyright 2024. Made by <span className="underline font-bold text-white">Ishita Pan</span>
            </div>
        </footer>
    );
};

export default Footer;