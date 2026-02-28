import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Users, BookOpen, Award, ArrowRight } from "lucide-react";

const heroEase = [0.22, 1, 0.36, 1] as const;
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: heroEase, delay: i * 0.1 },
  }),
};

/**
 * Design Philosophy: Warm Minimalism with Mediterranean Accents
 * - Color Palette: Terracotta (#C85A3A), Sage Green (#8B9D83), Cream (#FAF6F1), Charcoal (#2C2C2C)
 * - Typography: Playfair Display (headlines) + Inter (body)
 * - Layout: Asymmetric with organic spacing and diagonal transitions
 * - Interactions: Soft, calm, deliberate animations
 * - Teacher: Lorpu
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAF6F1]/95 backdrop-blur-sm border-b border-[#E8E4DC]">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-[#C85A3A]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lorpu's English
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-[#2C2C2C] hover:text-[#C85A3A] transition-colors">About</a>
            <a href="#benefits" className="text-[#2C2C2C] hover:text-[#C85A3A] transition-colors">Benefits</a>
            <a href="#signup" className="text-[#2C2C2C] hover:text-[#C85A3A] transition-colors">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        aria-label="Hero"
        className="relative min-h-[80vh]  items-center py-20 md:py-32 overflow-hidden bg-[#FAF6F1]"
      >
        <div className="container relative z-10 flex justify-center items-center">
          <motion.div
            className="max-w-2xl text-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: {}, hidden: {} }}
          >
            <motion.p className="mb-6" variants={heroVariants} custom={0}>
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#C85A3A]/30 bg-white/90 text-[#C85A3A] text-xs font-semibold tracking-widest uppercase shadow-sm">
                Learn English Online
              </span>
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              variants={heroVariants}
              custom={1}
            >
              Master English{" "}
              <span className="text-[#C85A3A]">with Confidence</span>
            </motion.h1>
            <motion.p
              className="text-lg text-[#6B6B6B] mb-10 leading-relaxed max-w-xl mx-auto"
              variants={heroVariants}
              custom={2}
            >
              Personalized online English lessons designed for your goals. Whether you're a beginner or professional, I'll guide you to fluency with patience and expertise.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={heroVariants}
              custom={3}
            >
              <a
                href="#signup"
                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-[#C85A3A] text-white font-medium transition-all duration-300 hover:bg-[#B84A2A] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
              >
                Start Learning <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg h-12 px-8 border-2 border-[#C85A3A] text-[#C85A3A] font-medium bg-transparent transition-all duration-300 hover:bg-[#C85A3A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#C85A3A]/10 rounded-full mb-6">
              <span className="text-[#C85A3A] text-sm font-medium">ABOUT ME</span>
            </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hi, I'm Lorpu
              </h2>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed text-lg">
                I'm based in Italy. I have a passion for helping people communicate with confidence and I do that by supporting them as they learn English.
              </p>
              <p className="text-[#6B6B6B] mb-8 leading-relaxed text-lg">
                I keep that in mind in every lesson: my approach is personalized, patient, and focused on real-world communication. I believe learning English should be enjoyable and practical, not intimidating.
              </p>
              
            </div>
            <div className="bg-gradient-to-br from-[#C85A3A]/20 to-[#8B9D83]/20 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-[#6B6B6B] w-full h-full">
                  
                  <img src="/images/lorpu.jpeg" alt="Lorpu's Profile Photo" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Teach Section */}
      <section className="py-20 md:py-32 bg-[#FAF6F1]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#C85A3A]/10 rounded-full mb-6">
              <span className="text-[#C85A3A] text-sm font-medium">WHO I TEACH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Lessons for Everyone
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Whether you're just starting out or looking to refine your skills, I have lessons tailored to your level and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Beginners",
                description: "Starting from scratch? I'll teach you the fundamentals of English in a supportive, pressure-free environment."
              },
              {
                icon: Users,
                title: "Professionals",
                description: "Improve your business English, prepare for interviews, or enhance your communication skills for work."
              },
              {
                icon: Award,
                title: "Students",
                description: "Preparing for exams? I'll help you strengthen your grammar, vocabulary, and speaking skills."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-12 h-12 text-[#C85A3A] mb-4" />
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C85A3A]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9D83]/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#C85A3A]/10 rounded-full mb-6">
              <span className="text-[#C85A3A] text-sm font-medium">WHY CHOOSE ME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Benefits of Learning with Lorpu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Personalized Approach",
                description: "Every lesson is tailored to your specific goals, pace, and learning style. No cookie-cutter methods."
              },
              {
                title: "Flexible Scheduling",
                description: "Choose lesson times that work for you. I offer flexible scheduling to fit your busy life."
              },
              {
                title: "Real-World Skills",
                description: "Learn practical English for everyday conversations, business, or travel. Not just textbook grammar."
              },
              {
                title: "Patient & Supportive",
                description: "I create a judgment-free zone where you can make mistakes and learn. Progress over perfection."
              },
              {
                title: "Affordable Rates",
                description: "High-quality English lessons at competitive prices. No hidden fees or long-term contracts."
              },
              {
                title: "Proven Results",
                description: "My students consistently improve their confidence and fluency. Success stories speak for themselves."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <Award className="w-6 h-6 text-[#C85A3A] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.jsdelivr.net/gh/manus-ai/webdev-static-assets@latest/cta-background.png')",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#2C2C2C]/40" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Start Your English Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Take the first step toward fluency. Sign up below to receive information about Lorpu's lessons and special introductory offers.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6mIFp7J_m8pLqf76KGNfHUOgV1DKm5XfafOgD8FglYTIGIg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-[#C85A3A] hover:bg-[#B84A2A] text-white rounded-lg h-12 px-8 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Lorpu's English
              </h3>
              <p className="text-white/70 leading-relaxed">
                Personalized English lessons for everyone, from beginners to professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#signup" className="hover:text-white transition-colors">Sign Up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <a href="mailto:lorpu.englishlesson@gmail.com" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                lorpu.englishlesson@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>&copy; 2026 Lorpu's English Lessons. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
