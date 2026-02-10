import React from 'react';
import { motion } from 'framer-motion';
import { CandlestickChart, GraduationCap, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Delta Exchange Futures',
        description: 'Specialized strategies for trading Bitcoin and Ethereum futures on Delta Exchange with low fees and high leverage.',
        icon: CandlestickChart,
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'Mentorship Program',
        description: 'Learn directly from KK. Master technical analysis, option selling, and risk management in our exclusive cohort.',
        icon: GraduationCap,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        title: 'Algo Trading Bots',
        description: 'Automate your Delta Exchange trades with our proprietary algorithms designed for crypto volatility.',
        icon: Zap,
        color: 'from-yellow-400 to-orange-500'
    },
    {
        title: 'Risk Management',
        description: 'Protect your capital with our proven position sizing and stop-loss frameworks taylored for crypto.',
        icon: ShieldCheck,
        color: 'from-green-500 to-emerald-500'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#0f172a] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Premium Trading Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Elevate your trading game with our suite of tools and educational resources designed for the modern crypto trader.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                                Learn More <ArrowUpRight className="w-4 h-4 ml-2" />
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
