"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Loader2 } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/raditya-yusuf-ramadhan" },
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/radityaysf" },
    { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com/radityaysff" },
  ];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Mengirim pesan...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9a80acaa-0b74-42d5-b9b5-c01d05d83f7b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Pesan berhasil terkirim! Terima kasih telah menghubungi saya.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Terjadi kesalahan jaringan, gagal mengirim pesan.");
    }
    
    setIsSubmitting(false);
    setTimeout(() => setResult(""), 5000); // Clear message after 5 seconds
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2">Hubungi Saya</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-black text-white">Mari Berkolaborasi</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#111116]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Left Column: Contact Info */}
          <div className="w-full md:w-5/12 bg-white/5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black text-white mb-6 font-serif">Informasi Kontak</h4>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Saat ini saya sedang mencari peluang baru. Baik Anda memiliki pertanyaan atau sekadar ingin menyapa, saya akan berusaha sebaik mungkin untuk membalasnya!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:radityaysf06@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-teal-500 transition-colors group">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-teal-500/50">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">radityaysf06@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/10">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">085600110828</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <span className="font-medium">Banyumas, Jawa Tengah, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12">
            <h4 className="text-2xl font-black text-white mb-6 font-serif">Kirim Pesan</h4>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Nama Anda</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Anda</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subjek</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Pesan</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] disabled:opacity-70 disabled:hover:scale-100 transition-all flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {result && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-sm font-medium mt-4 ${result.includes("berhasil") ? "text-teal-400" : "text-amber-400"}`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
