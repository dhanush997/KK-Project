import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Sparkles, Rocket, ArrowRight } from 'lucide-react';

import { generateSerialNumber, generateTimeSlot, sendRegistrationEmail } from '../services/mailService';

const WorkshopBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [regDetails, setRegDetails] = useState({ serialNo: '', slot: '' });

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000); // 2s delay for a better 'pop'
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setIsLoading(true);
        const serialNo = generateSerialNumber();
        const slot = generateTimeSlot();

        try {
            await sendRegistrationEmail({ ...formData, serialNo, slot });
            setRegDetails({ serialNo, slot });
            setIsRegistered(true);
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setIsLoading(false);
        }
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

                                {!isRegistered ? (
                                    <>
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
                                            Join our exclusive world-class session on advanced market analysis.
                                        </p>

                                        {/* Date/Time Cards - Prominent Display */}
                                        <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 backdrop-blur-sm">
                                                <Calendar className="w-5 h-5 text-yellow-500" />
                                                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Date</span>
                                                <span className="text-white font-bold">28th Feb, 2026</span>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 backdrop-blur-sm">
                                                <Clock className="w-5 h-5 text-yellow-500" />
                                                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Time</span>
                                                <span className="text-white font-bold">12:30 AM IST</span>
                                            </div>
                                        </div>

                                        {/* Registration Form */}
                                        <form onSubmit={handleRegister} className="w-full space-y-4">
                                            <div className="space-y-4 mb-6">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Full Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-500"
                                                />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-500"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full py-5 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-[1.25rem] text-white font-bold text-lg shadow-xl shadow-yellow-500/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
                                            >
                                                {isLoading ? "Processing..." : "Reserve My Free Spot"}
                                                {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full py-4 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Rocket className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">Registration Successful!</h2>
                                        <p className="text-slate-400 mb-8">We've sent the details to your email.</p>

                                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 mb-8 text-left space-y-4">
                                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                                <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Serial No</span>
                                                <span className="text-yellow-500 font-mono font-bold tracking-wider">{regDetails.serialNo}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Time Slot</span>
                                                <span className="text-white font-bold">{regDetails.slot}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleClose}
                                            className="text-slate-500 hover:text-white text-sm font-medium underline underline-offset-4"
                                        >
                                            Close and continue
                                        </button>
                                    </motion.div>
                                )}

                                {!isRegistered && (
                                    <button
                                        onClick={handleClose}
                                        className="mt-6 text-slate-500 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-white"
                                    >
                                        Maybe later, I'll explore first
                                    </button>
                                )}
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
