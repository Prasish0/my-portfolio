import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web Development',
    image: null,
  },
  {
    title: 'E-commerce Redesign',
    category: 'UI/UX Design',
    image: null,
  },
  {
    title: 'Health & Wellness App',
    category: 'Mobile App',
    image: null,
  },
  {
    title: 'Brand Identity System',
    category: 'Branding',
    image: null,
  },
  {
    title: 'SaaS Platform',
    category: 'Web Development',
    image: null,
  },
  {
    title: 'Smart Home Device',
    category: 'Product Design',
    image: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recent projects
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 text-white/60 hover:text-white transition-colors underline underline-offset-4"
          >
            View all projects
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
