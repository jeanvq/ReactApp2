// Home page - introduces Alex Rivera with navigation buttons
export default function Home() {
  return (
    // Main container - centered content with full screen height
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      
      {/* Hero title */}
      <h1 className="text-5xl font-bold mb-4">Hey, I'm Alex Rivera 👋</h1>
      
      {/* Short bio */}
      <p className="text-xl text-gray-400 mb-6">
        Full Stack Developer passionate about building cool things for the web.
      </p>

      {/* Navigation buttons */}
      <div className="flex gap-4">
        <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </a>
        <a href="/contact" className="border border-gray-500 px-6 py-3 rounded-lg hover:border-white">
          Contact Me
        </a>
      </div>
    </main>
  );
}