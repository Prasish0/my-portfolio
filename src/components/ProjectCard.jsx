import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ title, category, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      <div className="aspect-[4/3] bg-dark-700 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2">
            View Case Study
            <ArrowUpRight size={18} />
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold group-hover:text-white/80 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-white/50">{category}</p>
      </div>
    </motion.div>
  );
}
