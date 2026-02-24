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
                        <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto max-h-[95vh] overflow-y-auto">

                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-[60px]" />
                            <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-orange-600/10 rounded-full blur-[60px]" />

                            <div className="relative p-6 md:p-8 flex flex-col items-center text-center">
                                {/* Header Icon - Custom Logo Image */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20 rotate-3 overflow-hidden p-2 border border-white/10">
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
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                                            <Sparkles className="w-3 h-3" />
                                            Limited Admission
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                                            Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Session</span>
                                        </h2>

                                        <p className="text-slate-400 text-sm md:text-base mb-6 max-w-xs">
                                            Join our exclusive world-class session on advanced market analysis.
                                        </p>

                                        {/* Date/Time Cards - Prominent Display */}
                                        <div className="grid grid-cols-2 gap-3 w-full mb-6">
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-1 backdrop-blur-sm">
                                                <Calendar className="w-4 h-4 text-yellow-500" />
                                                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Date</span>
                                                <span className="text-white text-sm font-bold">28th Feb, 2026</span>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-1 backdrop-blur-sm">
                                                <Clock className="w-4 h-4 text-yellow-500" />
                                                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Time</span>
                                                <span className="text-white text-sm font-bold">12:30 AM IST</span>
                                            </div>
                                        </div>

                                        {/* Registration Form */}
                                        <form onSubmit={handleRegister} className="w-full space-y-3">
                                            <div className="space-y-3 mb-4">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Full Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-500"
                                                />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-500"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-bold text-base shadow-xl shadow-yellow-500/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
                                            >
                                                {isLoading ? "Processing..." : "Reserve My Spot"}
                                                {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full py-2 text-center"
                                    >
                                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Rocket className="w-6 h-6 text-green-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
                                        <p className="text-slate-400 text-sm mb-6">We've sent the details to your email.</p>

                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-left space-y-3">
                                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Serial No</span>
                                                <span className="text-yellow-500 font-mono text-sm font-bold tracking-wider">{regDetails.serialNo}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Time Slot</span>
                                                <span className="text-white text-sm font-bold">{regDetails.slot}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleClose}
                                            className="text-slate-500 hover:text-white text-xs font-medium underline underline-offset-4"
                                        >
                                            Close and continue
                                        </button>
                                    </motion.div>
                                )}

                                {!isRegistered && (
                                    <button
                                        onClick={handleClose}
                                        className="mt-4 text-slate-500 hover:text-white text-xs font-medium transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-white"
                                    >
                                        Maybe later
                                    </button>
                                )}
                            </div>

                            {/* Corner Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WorkshopBanner;
