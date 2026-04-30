// Projects page - displays a grid of sample projects with tech stack badges
export default function Projects() {

  // Sample projects data - each has a title, description, tech stack and link
  const projects = [
    {
      title: "ShopEasy",
      description: "An e-commerce platform built with Next.js and Stripe for payments.",
      tech: ["Next.js", "Tailwind", "Stripe"],
      link: "#",
    },
    {
      title: "TaskFlow",
      description: "A productivity app to manage tasks and deadlines with drag & drop.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "WeatherNow",
      description: "Real-time weather app using OpenWeather API with location detection.",
      tech: ["JavaScript", "REST API", "CSS"],
      link: "#",
    },
  ];

  return (
    // Main container with padding
    <main className="min-h-screen p-10">
      
      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects 🚀</h1>

      {/* Projects grid - responsive 1 to 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Loop through each project and render a card */}
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition">
            
            {/* Project title */}
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            
            {/* Project description */}
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-blue-900 text-blue-300 text-sm px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* Link to project */}
            <a href={project.link} className="text-blue-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </main>
  );
}