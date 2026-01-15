import { motion } from 'framer-motion';
import { Palette, Code, BookOpen, Smartphone } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Palette,
    title: 'Physical Products',
    description: 'From concept to production, we design physical products that are both functional and beautiful.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
  },
  {
    icon: BookOpen,
    title: 'Brand Guidelines',
    description: 'Comprehensive brand systems that ensure consistency across all touchpoints.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications designed for optimal user experience.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services we offer
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We provide end-to-end design and development services to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
