const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 bg-white shadow-md px-8 py-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-600 overflow-hidden">
                    {/* Replace with your headshot */}
                    <img src={new URL('../assets/logo.png', import.meta.url).href} alt="logo" />
                </div>
                <span className="font-bold tracking-tighter text-lg uppercase hover:text-teal-600 hover:scale-110 transition duration-300 cursor-pointer">
                    Ishita Pan
                </span>
            </div>
            <ul className="hidden md:flex gap-10 font-bold uppercase tracking-widest text-sm">
                <li className="hover:text-teal-600 hover:scale-110 transition duration-300 cursor-pointer"><a href="#">Home</a></li>
                <li className="hover:text-teal-600 hover:scale-110 transition duration-300 cursor-pointer"><a href="#about">About</a></li>
                <li className="hover:text-teal-600 hover:scale-110 transition duration-300 cursor-pointer"><a href="#projects">Projects</a></li>
                <li className="hover:text-teal-600 hover:scale-110 transition duration-300 cursor-pointer"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;