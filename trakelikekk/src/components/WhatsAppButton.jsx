import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-28 right-8 z-[200]">
            <motion.a
                href="https://wa.me/917205912690?text=Hello%20TradeLikeKK%2C%20I%20am%20interested%20in%20trading."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl transition-all hover:bg-green-600 group relative"
            >
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                    Chat on WhatsApp
                </span>

                {/* Pulse Effect */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
