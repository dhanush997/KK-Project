import React from 'react';
import { motion } from 'framer-motion';

const RocketCoin = () => {
    return (
        <div className="relative w-64 h-64 flex items-center justify-center preserve-3d perspective-1000">
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative w-48 h-48 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Coin Face Front */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 border-4 border-yellow-200 shadow-[0_0_50px_rgba(234,179,8,0.6)] flex items-center justify-center backface-hidden">
                    <div className="absolute inset-2 rounded-full border border-yellow-600/50 bg-gradient-to-tr from-yellow-400/20 to-transparent" />

                    {/* Rocket SVG */}
                    <svg viewBox="0 0 24 24" className="w-24 h-24 text-white drop-shadow-md transform -rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#facc15" stroke="none" />
                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#f59e0b" stroke="white" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="white" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="white" />
                    </svg>

                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-50" />
                </div>

                {/* Coin Face Back */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-yellow-300 via-yellow-500 to-yellow-700 border-4 border-yellow-200 shadow-xl flex items-center justify-center backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                    <div className="text-4xl font-bold text-white drop-shadow-md">KK</div>
                </div>

                {/* Coin Edge (Thickness) - Simulated */}
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute inset-0 rounded-full border-[10px] border-yellow-800"
                        style={{
                            transform: `translateZ(-${i / 2}px)`,
                            zIndex: -1
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default RocketCoin;
