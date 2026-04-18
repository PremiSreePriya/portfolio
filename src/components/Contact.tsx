import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { STUDENT_INFO } from '../constants';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdapwqno", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("Something went wrong!");
    }
  };

  const contactInfo = [
    {
      name: "Email",
      value: STUDENT_INFO.email,
      link: `mailto:${STUDENT_INFO.email}`,
      icon: Mail,
    },
    {
      name: "LinkedIn",
      value: "Premi Sree Priya T S",
      link: STUDENT_INFO.socials.linkedin,
      icon: Linkedin,
    },
    {
      name: "GitHub",
      value: "premisreepriya",
      link: STUDENT_INFO.socials.github,
      icon: Github,
    },
    {
      name: "Location",
      value: STUDENT_INFO.location,
      icon: MapPin,
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="Get In Touch" center />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                I'm always open to discussing new projects, ideas or opportunities.
              </p>
            </div>

            {/* Contact List */}
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  {/* Icon Box */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                    <item.icon size={20} className="text-cyan-400" />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-sm text-slate-400">{item.name}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-white hover:text-cyan-400 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a]/80 p-8 rounded-2xl border border-slate-800 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-xl bg-transparent border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-4 rounded-xl bg-transparent border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />

              {/* Message */}
              <textarea
                name="message"
                rows={4}
                placeholder="Your message here..."
                required
                className="w-full p-4 rounded-xl bg-transparent border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />

              {/* Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white rounded-xl flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition"
              >
                Send Message <Send size={18} />
              </motion.button>

              {/* Success Message */}
              {success && (
                <p className="text-green-400 text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}