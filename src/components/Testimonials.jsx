import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Nivora was an absolute pleasure. They transformed our vision into a stunning reality that exceeded all expectations.",
    name: "Sarah Chen",
    role: "CEO, TechStart",
  },
  {
    quote: "The attention to detail and commitment to quality is unmatched. Our new website has significantly improved our conversion rates.",
    name: "Michael Torres",
    role: "Founder, Elevate",
  },
  {
    quote: "Professional, creative, and incredibly responsive. They delivered a product that perfectly captures our brand essence.",
    name: "Emily Watson",
    role: "Marketing Director, Bloom",
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What clients say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800/50 border border-white/10 rounded-3xl p-8"
            >
              <Quote size={32} className="text-white/20 mb-6" />
              <p className="text-white/70 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/50">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
