import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, CheckCircle, Send } from 'lucide-react';
import { sendRegistrationEmail } from '../services/mailService';

const RegistrationModal = ({ isOpen, onClose, selectedPlan }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await sendRegistrationEmail({
                ...formData,
                purpose: `Subscription Plan: ${selectedPlan.name}`
            });
            setIsComplete(true);
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="p-6 md:p-10">
                        {!isComplete ? (
                            <>
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
                                        <selectedPlan.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Register for {selectedPlan.name}</h3>
                                    <p className="text-slate-400 text-sm">Fill in your details to get started with our professional trading insights.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-sm focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-600"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 disabled:opacity-50 rounded-xl text-white font-bold text-base shadow-xl shadow-yellow-500/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mt-6"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Proceed to Checkout
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-4"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Registration Sent!</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                    We've received your interest in the <span className="text-white font-bold">{selectedPlan.name}</span>.
                                    Our team will contact you shortly on <span className="text-white">{formData.phone}</span> with the next steps.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all"
                                >
                                    Close
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default RegistrationModal;
