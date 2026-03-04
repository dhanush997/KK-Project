import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CEONote = () => {
    return (
        <section className="py-20 bg-[#0b1120] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Photo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group w-full lg:w-1/3 max-w-[320px]"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                            <img
                                src="/ceo.png"
                                alt="CEO - TradeLikeKK"
                                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Status badge */}
                        <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl">
                            The Visionary
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                            <Quote className="w-3 h-3" />
                            A message from our founder
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Trading is not about being right, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">it is about following a process.</span>
                        </h2>

                        <div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                            <p>
                                When I started TradeLikeKK, my goal was simple: to de-mystify the world of crypto futures and Delta Exchange. Most traders fail not because they lack intelligence, but because they lack a disciplined framework.
                            </p>
                            <p>
                                At TradeLikeKK, we don't just provide signals; we provide a mental model for navigating the markets. We focus on risk management, algo-supported strategies, and a mathematical approach to wealth generation.
                            </p>
                            <p>
                                Whether you're just starting out or looking to professionalize your trading desk, we are here to ensure you trade with confidence, precision, and above all, a clear edge.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h4 className="text-white font-bold text-lg mb-1">Karunakar Hembram</h4>
                            <p className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">CEO & Founder, TradeLikeKK</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CEONote;
