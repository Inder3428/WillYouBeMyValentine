import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ProposalPage() {
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleNoHover = () => {
    if (noCount < 3) {
      const newX = Math.random() * 200 - 100;
      const newY = Math.random() * 200 - 100;
      setNoButtonPosition({ x: newX, y: newY });
      setNoCount(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    navigate('/love-languages');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-center"
      >
        <Heart className="w-24 h-24 text-red-500 mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-8">
          Will you be my Valentine?
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className="px-8 py-4 bg-red-500 text-white rounded-full text-xl font-bold hover:bg-red-600 transition-colors"
          >
            Yes ❤️
          </motion.button>

          {noCount < 3 && (
            <motion.button
              animate={noButtonPosition}
              onHoverStart={handleNoHover}
              className="px-8 py-4 bg-gray-500 text-white rounded-full text-xl font-bold"
            >
              No 😔
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}