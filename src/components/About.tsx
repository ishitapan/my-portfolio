const skills = ["JAVA", "SPRING BOOT", "SPRING SECURITY", "MICROSERVICE", "HIBERNATE", "REST", "MYSQL",
    "KAFKA", "JUNIT", "GIT", "JIRA", "AWS"];

const About = () => {
    return (
        <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold uppercase mb-4 text-teal-600 tracking-wide drop-shadow-lg">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20">
                <div>
                    <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        I'm a <strong>Backend Engineer</strong> with 5+ years of experience in financial services, insurance, and e-commerce. Specialized in Java, Spring Boot, REST APIs, and microservices, with hands-on experience in system modernization and transaction-critical platforms.
                        Passionate about writing clean, maintainable code and currently expanding frontend skills using React and TypeScript to build end-to-end applications.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow.
                    </p>
                    <a href="#contact" className="inline-block bg-teal-600 text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-teal-700 transition duration-300">Contact</a>
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