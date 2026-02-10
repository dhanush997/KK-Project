import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, ArrowRight, Rocket } from 'lucide-react';
import RocketCoin from './RocketCoin';

const ComingSoonBanner = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 15,
        hours: 10,
        minutes: 45,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setEmail('');
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-hidden font-sans text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] bg-purple-900/40 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] bg-blue-900/40 rounded-full blur-[150px] animate-pulse delay-1000" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-600/10 rounded-full blur-[200px]" />
            </div>

            {/* Main Content Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-6xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl overflow-hidden"
            >
                {/* Shine effect on card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

                <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex-1 space-y-10 z-10 w-full text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-bold tracking-wider mb-6 uppercase">
                                <Rocket className="w-4 h-4" />
                                Moon Launch Imminent
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                                Trake Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">KK</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                The next generation of crypto-powered tracking and analytics is arriving. Secure your spot on the rocket ship before liftoff.
                            </p>
                        </motion.div>

                        {/* Countdown Timer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6"
                        >
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                <div key={unit} className="flex flex-col items-center">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg backdrop-blur-md relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                                            {String(value).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-xs md:text-sm text-slate-500 mt-3 uppercase tracking-widest font-semibold">{unit}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Newsletter Form */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0 pt-4"
                        >
                            <div className="relative flex-1">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email for early access"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 text-white placeholder-slate-500 transition-all shadow-inner"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl font-bold text-white shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                            >
                                {submitted ? 'Welcome Aboard!' : 'Join Waitlist'}
                                {!submitted && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </motion.form>
                    </div>

                    {/* Right Graphic/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        className="flex-1 w-full max-w-md mx-auto relative flex justify-center items-center"
                    >
                        <RocketCoin />
                    </motion.div>
                </div>
            </motion.div>

            {/* Footer */}
            <div className="absolute bottom-6 left-0 w-full text-center text-slate-600 text-sm">
                &copy; 2026 Trake Like KK. To the Moon. 🚀
            </div>
        </div>
    );
};

export default ComingSoonBanner;
