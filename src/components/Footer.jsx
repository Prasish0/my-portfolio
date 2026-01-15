import { motion } from 'framer-motion';
import { ArrowUpRight, Twitter, Linkedin, Dribbble, Instagram } from 'lucide-react';
import AnimatedText from './AnimatedText';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const footerLinks = [
  {
    title: 'Navigation',
    links: ['Work', 'Services', 'About', 'Blog', 'Contact'],
  },
  {
    title: 'Services',
    links: ['Web Development', 'UI/UX Design', 'Branding', 'Mobile Apps'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      {/* CTA Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedText 
              text="Let's work together" 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 block"
            />
            <a
              href="mailto:bipraj1977@gmail.com"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
            >
              Start a project
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="text-2xl font-bold mb-4 block">
                Prasish Khadka
              </a>
              <p className="text-white/50 mb-6 max-w-sm">
                A design studio focused on clarity, craft, and real-world execution.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <social.icon size={18} className="text-white/70" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold mb-4">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2024 Prasish Khadka. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Designed with ♥ for creators everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
