import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Sparkles, Rocket, ArrowRight } from 'lucide-react';

const WorkshopBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000); // 2s delay for a better 'pop'
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto">

                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px]" />

                            <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                                {/* Header Icon - Custom Logo Image */}
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-yellow-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 rotate-3 overflow-hidden p-3 border border-white/10">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src="/logo.png"
                                            alt="Logo"
                                            className="w-full h-full object-cover scale-110"
                                            style={{
                                                maskImage: 'radial-gradient(circle, black 65%, transparent 95%)',
                                                WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 95%)'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Limited Admission
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                    Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Session</span>
                                </h2>

                                <p className="text-slate-400 text-base md:text-lg mb-8 max-w-sm">
                                    Join us for an exclusive session on advanced trading strategies and market analysis.
                                </p>

                                {/* Date/Time Cards */}
                                <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-yellow-500" />
                                        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Date</span>
                                        <span className="text-white font-bold">28th Feb, 2026</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 backdrop-blur-sm">
                                        <Clock className="w-5 h-5 text-yellow-500" />
                                        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Time</span>
                                        <span className="text-white font-bold">12:00 AM IST</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={handleClose}
                                    className="w-full py-5 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 rounded-[1.25rem] text-white font-bold text-lg shadow-xl shadow-yellow-500/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
                                >
                                    Reserve My Free Spot
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Close link */}
                                <button
                                    onClick={handleClose}
                                    className="mt-6 text-slate-500 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-white"
                                >
                                    Maybe later, I'll explore first
                                </button>
                            </div>

                            {/* Corner Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-xl"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WorkshopBanner;
