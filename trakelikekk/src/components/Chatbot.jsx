import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Phone, Mail, User, HelpCircle, CheckCircle } from 'lucide-react';
import { generateSerialNumber, generateTimeSlot, sendRegistrationEmail } from '../services/mailService';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: ''
    });

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [step, isOpen]);

    const steps = [
        {
            question: "Hello! I'm your TradeLikeKK assistant. What's your name?",
            field: 'name',
            placeholder: 'Your Name...',
            icon: User
        },
        {
            question: "Great to meet you, {name}! What's your email address?",
            field: 'email',
            placeholder: 'email@example.com',
            icon: Mail
        },
        {
            question: "And your phone number for faster connection?",
            field: 'phone',
            placeholder: '+91 00000 00000',
            icon: Phone
        },
        {
            question: "How can we help you today? (e.g., Mentorship, Algo Trading, etc.)",
            field: 'purpose',
            placeholder: 'Your message...',
            icon: HelpCircle
        }
    ];

    const handleNext = async (e) => {
        e.preventDefault();
        const value = formData[steps[step].field];
        if (!value) return;

        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setIsSubmitting(true);
            try {
                await sendRegistrationEmail({ ...formData });
                setIsComplete(true);
            } catch (error) {
                console.error("Chat submission failed:", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[200]">
            {/* Chat Bubble Toggle */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${isOpen ? 'bg-slate-800 text-white' : 'bg-gradient-to-tr from-yellow-500 to-orange-600 text-white'
                    }`}
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
                    </span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] max-h-[600px] bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-white/5 border-b border-white/5 p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 to-orange-600 p-2 flex items-center justify-center">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain mix-blend-screen" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">TradeLikeKK Support</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-slate-400 text-xs">Always helpful</span>
                                </div>
                            </div>
                        </div>

                        {/* Chat Context */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            <div className="space-y-4">
                                {/* Previous Messages Recap */}
                                {steps.slice(0, step + 1).map((s, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex justify-start">
                                            <div className="max-w-[80%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 text-slate-200 text-sm">
                                                {s.question.replace('{name}', formData.name)}
                                            </div>
                                        </div>
                                        {i < step && (
                                            <div className="flex justify-end">
                                                <div className="max-w-[80%] bg-yellow-500 text-white rounded-2xl rounded-tr-none p-4 text-sm font-medium">
                                                    {formData[s.field]}
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}

                                {isComplete && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-center py-4 space-y-4"
                                    >
                                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white font-bold">Inquiry Sent!</p>
                                            <p className="text-slate-400 text-xs mt-1">Our team will reach out to you within 24 hours.</p>
                                        </div>
                                        <button
                                            onClick={() => { setIsOpen(false); setStep(0); setIsComplete(false); setFormData({ name: '', email: '', phone: '', purpose: '' }); }}
                                            className="text-yellow-500 text-sm font-bold border-b border-yellow-500/20 hover:border-yellow-500 transition-all"
                                        >
                                            Got it, thanks!
                                        </button>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        {!isComplete && (
                            <form onSubmit={handleNext} className="p-6 bg-white/5 border-t border-white/5">
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        {React.createElement(steps[step].icon, { className: "w-4 h-4" })}
                                    </div>
                                    <input
                                        autoFocus
                                        required
                                        type={steps[step].field === 'email' ? 'email' : 'text'}
                                        placeholder={steps[step].placeholder}
                                        value={formData[steps[step].field]}
                                        onChange={(e) => setFormData({ ...formData, [steps[step].field]: e.target.value })}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white text-sm focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-600"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 disabled:opacity-50"
                                    >
                                        {isSubmitting ? <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
