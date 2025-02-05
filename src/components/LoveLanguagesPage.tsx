import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

export default function LoveLanguagesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/gallery');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 overflow-hidden relative">
      {translations.map((translation, index) => (
        <motion.div
          key={translation.language}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 4,
            delay: Math.random() * 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute text-2xl md:text-4xl font-bold text-red-600 whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {translation.text}
        </motion.div>
      ))}
    </div>
  );
}