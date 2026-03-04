import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Crown, ArrowRight } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const plans = [
    {
        name: 'Basic Explorer',
        price: '₹2,499',
        period: 'per month',
        description: 'Perfect for beginners starting their crypto trading journey.',
        icon: Shield,
        color: 'from-blue-500 to-indigo-600',
        features: [
            'Daily Market Analysis',
            'Weekly Alpha Signals',
            'Basic Algo Trading Bot',
            'Discord Community Access',
            'Email Support'
        ],
        buttonColor: 'bg-white/5 hover:bg-white/10 text-white'
    },
    {
        name: 'Pro Trader',
        price: '₹5,999',
        period: 'per month',
        description: 'Advanced strategies and tools for serious crypto traders.',
        icon: Zap,
        color: 'from-yellow-400 to-orange-600',
        features: [
            'Real-time Entry/Exit Alerts',
            '3 Daily Premium Signals',
            'Advanced Multi-pair Algos',
            'Live Strategy Webinars',
            'Priority Support',
            'Personal Portfolio Review'
        ],
        buttonColor: 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-xl shadow-yellow-500/20',
        popular: true
    },
    {
        name: 'Elite Institutional',
        price: '₹14,999',
        period: 'per month',
        description: 'Maximum leverage and personalized mentorship from KK.',
        icon: Crown,
        color: 'from-purple-500 to-pink-600',
        features: [
            'Direct WhatsApp with KK',
            'Institutional-grade Algos',
            'In-depth Delta Ex Mastery',
            'Custom Strategy Development',
            'One-on-One Mentorship',
            'Early Access to New Bots'
        ],
        buttonColor: 'bg-white/5 hover:bg-white/10 text-white'
    }
];

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <section id="pricing" className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-semibold mb-4 backdrop-blur-sm"
                    >
                        <Crown className="w-4 h-4" />
                        Exclusive Access
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight"
                    >
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Trading Edge</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-xl mx-auto text-base"
                    >
                        Select a subscription plan that fits your trading style and goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col relative bg-slate-900/40 backdrop-blur-sm border rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 transition-all duration-300 hover:bg-slate-900/60 group hover:-translate-y-2 ${plan.popular ? 'border-yellow-500 shadow-[0_20px_60px_rgba(234,179,8,0.15)] ring-1 ring-yellow-500/20' : 'border-white/5'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-lg">
                                    Most Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <plan.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">{plan.description}</p>
                            </div>

                            {/* Price removed as per user request */}

                            <div className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-green-500" />
                                        </div>
                                        <span className="text-slate-300 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePlanSelect(plan)}
                                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all transform group-hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${plan.buttonColor}`}
                            >
                                Get Started Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedPlan={selectedPlan}
            />
        </section>
    );
};

export default Pricing;
