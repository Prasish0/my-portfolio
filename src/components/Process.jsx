import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Idea',
    description: 'We start by understanding your vision, goals, and target audience.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description: 'Creating wireframes and high-fidelity designs that align with your brand.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development',
    description: 'Building your product with clean, scalable, and maintainable code.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description: 'Deploying your product and providing ongoing support and optimization.',
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How we work
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A streamlined process designed to deliver exceptional results efficiently.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 bg-dark-900 inline-block p-4">
                  <div className="w-16 h-16 bg-dark-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon size={28} className="text-white/80" />
                  </div>
                </div>
                <div className="text-xs text-white/30 font-mono mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
