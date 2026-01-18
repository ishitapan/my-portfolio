const projectData = [
    {
        title: "Dopefolio",
        desc: "Dopefolio is a successful Open-Source project that I created which has been featured on some of the biggest tech sites.",
        img: "https://via.placeholder.com/600x400"
    },
    // Add more projects here
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold uppercase mb-4">Projects</h2>
                    <div className="w-10 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {projectData.map((project, idx) => (
                    <div key={idx} className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <img src={project.img} alt={project.title} className="rounded-lg shadow-xl" />
                        <div>
                            <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                            <p className="text-gray-600 mb-8 text-lg">{project.desc}</p>
                            <button className="bg-blue-600 text-white px-10 py-4 rounded font-bold uppercase tracking-widest">Case Study</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;