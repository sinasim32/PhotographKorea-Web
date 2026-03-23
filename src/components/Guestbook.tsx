import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { MessageSquare, Send, Loader2, Lock } from 'lucide-react';

interface GuestbookEntry {
  id: number;
  created_at: string;
  name: string;
  email: string;
  message: string;
  is_private: boolean;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastSubmitTime = useRef<number>(0);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching entries:', error);
      setError('Could not load guestbook entries.');
    } else {
      setEntries(data);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime.current < 30000) { // 30-second cooldown
      setError('Please wait a moment before posting again.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const { error } = await supabase
      .from('guestbook')
      .insert([{ name, email, message, is_private: isPrivate }]);

    if (error) {
      console.error('Error inserting entry:', error);
      setError('Failed to post your message. Please try again.');
    } else {
      setName('');
      setEmail('');
      setMessage('');
      setIsPrivate(false);
      lastSubmitTime.current = now;
      fetchEntries(); // Refresh entries
    }
    setIsSubmitting(false);
  };

  return (
    <section id="guestbook" className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-8 flex justify-between items-end">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="serif text-2xl md:text-3xl font-light tracking-tighter text-gray-800 uppercase"
          >
            GUESTBOOK
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-light-gray rounded-sm">
              <h4 className="serif text-lg font-light flex items-center gap-3 mb-2"><MessageSquare size={20}/> Leave a Note</h4>
              <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/50"
              />
              <input 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/50"
              />
              <textarea 
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/50 resize-none"
              />
              <div className="flex items-center gap-2 mt-[-4px]">
                <input 
                  type="checkbox" 
                  id="isPrivate" 
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="w-3 h-3 accent-black cursor-pointer"
                />
                <label htmlFor="isPrivate" className="text-[10px] text-gray-500 cursor-pointer flex items-center gap-1">
                  <Lock size={10} /> 비밀글로 남기기
                </label>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-black text-white text-sm py-2 rounded-sm hover:bg-opacity-80 transition-colors disabled:bg-opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18}/> : <Send size={16}/>}
                {isSubmitting ? 'Posting...' : 'Post Note'}
              </button>
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            </form>
          </motion.div>

          {/* Entries Section */}
          <div className="md:col-span-2">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin text-gray-300" size={40} />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence>
                  {entries.map(entry => (
                    <motion.div 
                      key={entry.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`relative group p-5 rounded-sm shadow-sm hover:shadow-md transition-shadow aspect-[4/5] flex flex-col justify-between border ${
                        entry.is_private ? 'bg-gray-50 border-gray-200' : 'bg-[#FFFBEB] border-yellow-200/50'
                      }`}
                    >
                      {entry.is_private ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                          <Lock size={20} strokeWidth={1.5} />
                          <p className="text-xs font-light tracking-widest">비밀글입니다</p>
                        </div>
                      ) : (
                        <>
                          <p className={`text-sm leading-relaxed break-words ${entry.is_private ? 'text-gray-500 italic' : 'text-gray-700'}`}>
                            {entry.message}
                          </p>
                          <div>
                            <p className="text-xs font-semibold text-gray-800 mt-4 flex items-center gap-1">
                              - {entry.name} {entry.is_private && <Lock size={10} className="text-gray-400" />}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1">
                              {new Date(entry.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
