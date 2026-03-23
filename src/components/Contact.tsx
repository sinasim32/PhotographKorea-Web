import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Form Section (Left, 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-light-gray rounded-sm">
              <h4 className="serif text-lg font-light flex items-center gap-3 mb-2"><Mail size={20}/> Send Inquiry</h4>
              <input 
                required
                type="text" 
                name="user_name"
                placeholder="Name" 
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/50"
              />
              <input 
                required
                type="email" 
                name="user_email"
                placeholder="E-mail" 
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/50"
              />
              <textarea 
                required
                name="message"
                rows={3} 
                placeholder="Your message..." 
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/50 resize-none"
              ></textarea>

              <button 
                disabled={isSending}
                type="submit" 
                className="flex items-center justify-center gap-2 bg-black text-white text-sm py-2 rounded-sm hover:bg-opacity-80 transition-colors disabled:bg-opacity-50 mt-2"
              >
                {isSending ? <Loader2 className="animate-spin" size={18}/> : <ArrowRight size={16}/>}
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="text-xs text-green-600 text-center mt-2">Message sent successfully.</p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-600 text-center mt-2">Failed to send. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Text Section (Right, 2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center pl-0 md:pl-12"
          >
            <h3 className="serif text-3xl md:text-4xl font-light tracking-tighter mb-6 text-gray-800 uppercase">
              CONNECT
            </h3>
            <p className="text-sm font-light text-gray-500 max-w-md mb-8 leading-relaxed tracking-wide">
              Whether you're looking for a collaboration, a private commission, or simply want to say hello. I'd love to hear from you.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-xs font-light uppercase tracking-widest text-gray-700">
                <Mail size={16} strokeWidth={1} />
                <a href="mailto:photographkorea@gmail.com" className="hover:opacity-50 transition-opacity">
                  photographkorea@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
