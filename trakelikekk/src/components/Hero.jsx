import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, BarChart3 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Custom Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Trading Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for Legibility & Masking Background Text */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent z-10" />
                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-slate-950 to-transparent z-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Prime Breaking News Scroller */}
                            <div className="w-full mb-10 overflow-hidden bg-slate-900/40 border-y border-white/5 backdrop-blur-md py-3 relative group">
                                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                                <motion.div
                                    animate={{ x: [0, -1200] }}
                                    transition={{
                                        duration: 35,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="flex whitespace-nowrap gap-16 items-center"
                                >
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex items-center gap-12">
                                            <span className="flex items-center gap-3">
                                                <span className="px-2 py-0.5 rounded bg-yellow-500 text-slate-950 text-[10px] font-black uppercase tracking-tighter">Prime</span>
                                                <span className="text-white font-bold text-sm tracking-wide">TradeLikeKK Prime</span>
                                            </span>
                                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                                <span className="text-yellow-500 text-lg">👉</span> One premium trade call daily at 3:30 PM
                                            </span>
                                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                                <span className="text-yellow-500 text-lg">👉</span> Minimum capital required: <span className="text-white font-bold">₹1.7 Lakhs</span>
                                            </span>
                                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                                <span className="text-yellow-500 text-lg">👉</span> No hero-zero or gambling strategies — only disciplined trading
                                            </span>
                                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                                <span className="text-yellow-500 text-lg">👉</span> No risky stunts — focus on practical and consistent returns
                                            </span>
                                            <span className="text-slate-300 font-bold text-sm flex items-center gap-2">
                                                <span className="text-orange-500 text-lg">👉</span> Join only if you are <span className="text-orange-500 underline decoration-2 underline-offset-4 uppercase italic">serious</span> about trading
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                </span>
                                #1 Platform for Delta Exchange
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Master Crypto with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">
                                    TradeLikeKK
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Unlock the power of <span className="text-white font-semibold">Delta Exchange</span>. Get expert insights, algo-trading strategies, and real-time signals for Bitcoin & Ethereum futures.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl font-bold text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    Start Trading
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <a
                                    href="https://www.delta.exchange/app/futures/markets"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                                >
                                    View Live Market
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                </a>
                            </div>

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                    <span>Secure Analysis</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-purple-400" />
                                    <span>98% Accuracy</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side remains empty to allow the background image's content to shine through */}
                    <div className="flex-1 w-full" />

                </div>
            </div>
        </section>
    );
};

export default Hero;
