"use client";

import Image from "next/image";
import { useState } from "react";
import shopeasyImage from "../../images/shopeasy.jpeg";
import taskflowImage from "../../images/taskflow.jpeg";
import weathernowImage from "../../images/weathernow.jpeg";

// Projects page - displays a grid of sample projects with tech stack badges
export default function Projects() {
  const [zoomedProject, setZoomedProject] = useState<null | {
    title: string;
    image: (typeof shopeasyImage);
  }>(null);

  // Sample projects data - each has a title, description, tech stack and link
  const projects = [
    {
      title: "ShopEasy",
      description: "An e-commerce platform built with Next.js and Stripe for payments.",
      tech: ["Next.js", "Tailwind", "Stripe"],
      link: "#",
      image: shopeasyImage,
    },
    {
      title: "TaskFlow",
      description: "A productivity app to manage tasks and deadlines with drag & drop.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: taskflowImage,
    },
    {
      title: "WeatherNow",
      description: "Real-time weather app using OpenWeather API with location detection.",
      tech: ["JavaScript", "REST API", "CSS"],
      link: "#",
      image: weathernowImage,
    },
  ];

  return (
    // Main container with padding
    <main className="min-h-screen p-8 md:p-10">
      
      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects 🚀</h1>

      {/* Projects grid - responsive 1 to 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
        
        {/* Loop through each project and render a card */}
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-2xl border border-gray-700/70 bg-neutral-900/40 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-blue-500/20"
          >
            {/* Project image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <h2 className="absolute bottom-3 left-4 text-2xl font-semibold text-white drop-shadow-md">
                {project.title}
              </h2>
            </div>

            <div className="p-6">
              {/* Project description */}
              <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-sm text-blue-200"
                >
                  {t}
                </span>
              ))}
              </div>

              {/* Link to project */}
              <button
                type="button"
                onClick={() => setZoomedProject({ title: project.title, image: project.image })}
                className="inline-flex items-center gap-2 text-blue-300 transition-colors hover:text-blue-200"
              >
                View Project
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox zoom when clicking View Project */}
      {zoomedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setZoomedProject(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
              setZoomedProject(null);
            }
          }}
          aria-label="Close zoomed project preview"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedProject.image}
              alt={`${zoomedProject.title} zoomed project preview`}
              className="h-auto w-full object-contain transition-transform duration-300"
              priority
            />
            <button
              type="button"
              onClick={() => setZoomedProject(null)}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm text-white hover:bg-black/80"
              aria-label="Close image zoom"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}