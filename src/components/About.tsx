import { motion } from 'motion/react';
import SectionTitle from './SectionTitle';
import { ExternalLink, Code2, Terminal } from 'lucide-react';

const highlightKeywords = (text: string) => {
  const boldWhite = ["Premi Sree Priya T S", "Electronics and Communication Engineering", "IT domain","team-based events","collaboration", "impactful solutions","adaptable","eager to learn","rank"];
  const colored = ["problem-solving", "software development", "Java", "SQL", "DSA", "AI tools", "hackathons", "technical events", "learn and grow", "leadership activities","tech enthusiast"];
  
  const allKeywords = [...boldWhite, ...colored];
  let parts = [text];
  
  allKeywords.forEach(keyword => {
    const newParts: any[] = [];
    parts.forEach(part => {
      if (part && typeof part === 'string') {
       const regex = new RegExp(`(${keyword})`, 'gi');
        const split = part.split(regex);
        newParts.push(...split);
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return parts.map((part, i) => {
    if (!part) return null;
    const isBoldWhite = boldWhite.some(k => k.toLowerCase() === (typeof part === 'string' ? part.toLowerCase() : ''));
    const isColored = colored.some(k => k.toLowerCase() === (typeof part === 'string' ? part.toLowerCase() : ''));
    
    if (isBoldWhite) {
      return (
        <span key={i} className="text-white font-bold">
          {part}
        </span>
      );
    }
    if (isColored) {
      return (
        <span key={i} className="text-secondary font-medium">
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function About() {
  const paragraphs = [
    "Hi, I’m Premi Sree Priya T S, an Electronics and Communication Engineering student with a strong interest in problem-solving and software development. Though my academic path is in ECE, I am passionate about the IT domain and enjoy building logical solutions and exploring new technologies.",
    "I have a solid foundation in Java and SQL. I also actively leverage AI tools to enhance my learning, improve productivity, and assist in building projects.",
    "I have maintained strong academic performance, including securing a rank in my first semester, and have actively participated in hackathons and technical events, winning in a few competitions and gaining valuable experience.",
    "I have also taken part in leadership activities in team-based events, where I coordinated tasks, encouraged collaboration, and ensured active participation.",
    "I am a tech enthusiast who is adaptable and eager to learn, with a strong drive to continuously grow and contribute to impactful solutions in the tech industry."
  ];

  const codingProfiles = [
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/premisremmmt?from=explore&tab=activity",
      icon: Code2,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/premisreepriya/",
      icon: Terminal,
      color: "from-orange-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" center />
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-10">
          {/* About Me Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-[#0a0f1e] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle gradient glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/15 transition-colors" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/15 transition-colors" />

            <div className="relative z-10 space-y-6 font-display">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-300 text-lg leading-[1.7] text-left">
                  {highlightKeywords(para)}
                </p>
              ))}
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-1.5 h-0 bg-gradient-to-b from-primary/60 to-secondary/60 group-hover:h-full transition-all duration-1000" />
          </motion.div>

          {/* Coding Profiles Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <div className="bg-[#0f172a] border border-slate-800 rounded-[16px] p-8 shadow-2xl relative overflow-hidden h-full flex flex-col">
              <div className="relative z-10">
                <p className="text-teal-400 font-bold mb-8 leading-relaxed">
  CODING PROFILE
</p>
                
                <div className="flex flex-col gap-4">
                  {codingProfiles.map((profile) => (
                    <motion.a
                      key={profile.name}
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="group relative flex items-center justify-between p-5 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5"
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center text-secondary`}>
                          <profile.icon size={20} />
                        </div>
                        <span className="text-white font-semibold tracking-wide">{profile.name}</span>
                      </div>
                      <ExternalLink size={16} className="text-slate-500 group-hover:text-secondary transition-colors relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/5 blur-[80px] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
