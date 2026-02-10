import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, LineChart, Globe } from 'lucide-react';

const stats = [
    { label: 'Active Traders', value: '15K+', icon: Users, color: 'text-blue-400' },
    { label: 'Signal Accuracy', value: '92%', icon: Award, color: 'text-yellow-400' },
    { label: 'Monthly Volume', value: '$500M+', icon: LineChart, color: 'text-green-400' },
    { label: 'Global Community', value: '25+', icon: Globe, color: 'text-purple-400' },
];

const MarketStats = () => {
    return (
        <section className="py-10 bg-[#0f172a] border-y border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 justify-center"
                        >
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color} bg-opacity-10`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketStats;
