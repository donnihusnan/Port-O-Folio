import React from 'react';
import { ExternalLink } from 'lucide-react';

const WorksSection = () => {
  const projects = [
    {
      title: 'Rsi.or.id',
      description:
        'Website of Research Synergy Institute, a research institute based in Indonesia.',
      technologies: ['WordPress', 'ElementorPro'],
      liveUrl: 'https://rsi.or.id',
    },
    {
      title: 'Recipe Generator',
      description:
        'Web App with user authentication and create, save, edit, delete recipes allowing users to create custom meals with ease',
      technologies: ['Nuxt.js', 'Tailwind', 'Supabase'],
      liveUrl: 'https://recipe-generator-rose.vercel.app',
    },
    {
      title: 'Rancakasumba',
      description:
        "Website for Rancakasumba village developed during KKN program, serving as the community's digital presence.",
      technologies: ['Next.js', 'Tailwind', 'Motion'],
      liveUrl: 'https://rancakasumba.vercel.app/',
    },
    {
      title: 'mémoar',
      description:
        'Note app that allows users to create, edit, and delete notes using local storage.',
      technologies: ['Vue3', 'Tailwind', 'Vite'],
      liveUrl: 'https://vue-memoar.vercel.app',
    },
    {
      title: 'Shopping Cart',
      description:
        'Displaying product filters with add/remove features to/from shopping cart',
      technologies: ['Vue', 'Bootstrap', 'Popper.js'],
      liveUrl: 'https://shopping-cart-two-bice.vercel.app/',
    },
    {
      title: 'Netflip',
      description:
        'Netflix clone to showcase movies and series trailer from public api',
      technologies: ['React', 'Axios', 'CSS'],
      liveUrl: 'https://netflip-5ee88.web.app/',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-150 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            Some of my works
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs md:text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
