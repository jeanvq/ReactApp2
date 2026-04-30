// About page - personal background, goals and skills
export default function About() {
  return (
    // Main container with max width for readability
    <main className="min-h-screen p-10 max-w-3xl mx-auto">

      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8 text-center">About Me 🧠</h1>

      {/* Bio section */}
      <div className="border border-gray-700 rounded-xl p-8 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Who am I?</h2>
        <p className="text-gray-400 leading-relaxed">
          Hi! I'm Alex Rivera, a Full Stack Developer based in Toronto, Canada. 
          I love building web applications that solve real problems and deliver 
          great user experiences. I'm currently studying Computer Programming 
          and working on personal projects to grow my skills.
        </p>
      </div>

      {/* Goals section */}
      <div className="border border-gray-700 rounded-xl p-8 mb-6">
        <h2 className="text-2xl font-semibold mb-4">My Goals 🎯</h2>
        <ul className="text-gray-400 space-y-2">
          <li>✅ Land a full stack developer role at an innovative company</li>
          <li>✅ Contribute to open source projects</li>
          <li>✅ Build a SaaS product from scratch</li>
          <li>✅ Keep learning every single day</li>
        </ul>
      </div>

      {/* Skills section - maps over array to render badges */}
      <div className="border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Skills 🧰</h2>
        <div className="flex flex-wrap gap-3">
          {/* Loop through skills and render a badge for each */}
          {["JavaScript", "React", "Next.js", "Node.js", "PHP", "MySQL", "Git", "Tailwind CSS"].map((skill, i) => (
            <span key={i} className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}