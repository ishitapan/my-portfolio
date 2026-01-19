const projectData = [
    {
        title: "Card Transaction Modernization Platform",
        desc: "Modernized legacy mainframe-based card transaction systems by migrating critical modules to Java-based microservices. Delivered enhancements for transaction activation, credit management, and due-date automation while ensuring regulatory compliance and production stability. Improved code quality by resolving high-severity issues identified through SonarQube.",
        img: new URL('../assets/credit card.jpg', import.meta.url).href
    },
    {
        title: "Task Manager API",
        desc: "Task Manager API with JWT & Roles.",
        img: new URL('../assets/task manager.png', import.meta.url).href
    },

    // Add more projects here
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold uppercase mb-4 text-teal-600 tracking-wide drop-shadow-lg">Projects</h2>
                </div>

                {projectData.map((project, idx) => (
                    <div key={idx} className="grid md:grid-cols-2 gap-12 items-start mb-20">
                        <div className="relative">
                            {/* Strong background light shadow */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-teal-300 via-teal-400 to-cyan-400 rounded-2xl blur-3xl opacity-70 -z-10 animate-pulse"></div>
                            {/* Secondary deeper shadow */}
                            <div className="absolute -inset-12 bg-teal-200 rounded-full blur-3xl opacity-40 -z-20"></div>
                            <img src={project.img} alt={project.title} className="rounded-lg w-full h-64 object-cover shadow-2xl relative z-10" width="500" height="350" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                            <p className="text-gray-600 mb-8 text-lg">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;