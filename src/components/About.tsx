const skills = ["HTML", "CSS", "JavaScript", "React", "SASS", "GIT", "Responsive Design", "SEO"];

const About = () => {
    return (
        <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold uppercase mb-4">About Me</h2>
                <div className="w-10 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-20">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded font-bold uppercase tracking-wider">Contact</button>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6">My Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span key={skill} className="bg-gray-200 px-5 py-3 rounded text-gray-700 font-semibold">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;