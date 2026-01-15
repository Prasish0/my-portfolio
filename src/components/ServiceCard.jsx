import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
      className="group relative bg-dark-800/50 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-dark-700/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
          <Icon size={24} className="text-white/80" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
