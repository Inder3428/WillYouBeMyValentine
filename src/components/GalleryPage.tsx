import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { galleryItems } from '../data/gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-red-600 text-center mb-12"
      >
        Our Love Story <Heart className="inline-block" />
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-red-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}