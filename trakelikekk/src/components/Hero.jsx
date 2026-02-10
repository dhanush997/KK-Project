import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import RocketCoin from './RocketCoin';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0f172a]">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-[#0f172a] to-transparent z-10" />
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
                                    TrakeLikeKK
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Unlock the power of <span className="text-white font-medium">Delta Exchange</span>. Get expert insights, algo-trading strategies, and real-time signals for Bitcoin & Ethereum futures.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl font-bold text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    Start Trading
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                    View Live Market
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                </button>
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

                    {/* 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full flex justify-center lg:justify-end relative"
                    >
                        {/* Decorative circles behind rocket */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                            <RocketCoin />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-10 bg-slate-800/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <span className="text-orange-500 font-bold">₿</span>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Bitcoin Futures</div>
                                    <div className="text-white font-bold flex items-center gap-1">
                                        $48,250.00
                                        <span className="text-green-400 text-xs">+2.4%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-0 bg-slate-800/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Long Signal</div>
                                    <div className="text-white font-bold">ETH/USD</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
