import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Wallet, PieChart as ChartIcon } from 'lucide-react';

const Calculators = () => {
    const [calcType, setCalcType] = useState('sip'); // 'sip' or 'lumpsum'
    const [amount, setAmount] = useState(calcType === 'sip' ? 5000 : 25000);
    const [roi, setRoi] = useState(12);
    const [years, setYears] = useState(10);
    const [results, setResults] = useState({ totalInvestment: 0, estimatedReturns: 0, totalValue: 0 });

    useEffect(() => {
        calculateResults();
    }, [calcType, amount, roi, years]);

    const calculateResults = () => {
        let totalInvestment = 0;
        let totalValue = 0;

        if (calcType === 'sip') {
            const P = amount;
            const i = roi / 12 / 100;
            const n = years * 12;
            totalInvestment = P * n;
            totalValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        } else {
            const P = amount;
            const i = roi / 100;
            const n = years;
            totalInvestment = P;
            totalValue = P * Math.pow(1 + i, n);
        }

        setResults({
            totalInvestment: Math.round(totalInvestment),
            estimatedReturns: Math.round(totalValue - totalInvestment),
            totalValue: Math.round(totalValue)
        });
    };

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    const returnPercentage = results.totalInvestment > 0
        ? (results.estimatedReturns / results.totalValue) * 100
        : 0;

    return (
        <section id="calculators" className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-semibold mb-4 backdrop-blur-sm"
                    >
                        <Calculator className="w-4 h-4" />
                        Smart Planning
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-3xl font-bold text-white mb-6"
                    >
                        Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Calculators</span>
                    </motion.h2>
                </div>

                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                    {/* Tabs */}
                    <div className="flex border-b border-white/5 p-2 gap-2 bg-white/5">
                        <button
                            onClick={() => { setCalcType('sip'); setAmount(5000); }}
                            className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${calcType === 'sip' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <TrendingUp className="w-5 h-5" />
                            SIP Calculator
                        </button>
                        <button
                            onClick={() => { setCalcType('lumpsum'); setAmount(25000); }}
                            className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${calcType === 'lumpsum' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <Wallet className="w-5 h-5" />
                            Lumpsum Calculator
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Inputs Area */}
                        <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
                            <div className="space-y-10">
                                {/* Amount Input */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center whitespace-nowrap gap-4">
                                        <label className="text-slate-300 font-medium truncate">
                                            <span className="text-white text-sm font-semibold">{calcType === 'sip' ? 'Monthly Investment' : 'Total Investment'}</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-sm">₹</span>
                                            <input
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(Number(e.target.value))}
                                                className="bg-white/5 pl-7 pr-3 py-2 rounded-xl border border-white/10 text-yellow-500 font-bold w-32 focus:outline-none focus:border-yellow-500/50 transition-all text-right"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={calcType === 'sip' ? 500 : 5000}
                                        max={calcType === 'sip' ? 100000 : 1000000}
                                        step={calcType === 'sip' ? 500 : 5000}
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                                    />
                                </div>

                                {/* ROI Input */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center whitespace-nowrap gap-4">
                                        <label className="text-slate-300 font-medium truncate">Expected Return Rate (p.a)</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={roi}
                                                step="0.5"
                                                onChange={(e) => setRoi(Number(e.target.value))}
                                                className="bg-white/5 pl-3 pr-7 py-2 rounded-xl border border-white/10 text-yellow-500 font-bold w-24 focus:outline-none focus:border-yellow-500/50 transition-all text-right"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-sm">%</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="0.5"
                                        value={roi}
                                        onChange={(e) => setRoi(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                                    />
                                </div>

                                {/* Years Input */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center whitespace-nowrap gap-4">
                                        <label className="text-slate-300 font-medium truncate">Time Period</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                value={years}
                                                onChange={(e) => setYears(Number(e.target.value))}
                                                className="bg-white/5 pl-3 pr-8 py-2 rounded-xl border border-white/10 text-yellow-500 font-bold w-24 focus:outline-none focus:border-yellow-500/50 transition-all text-right"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500 font-bold text-xs">Yr</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="40"
                                        value={years}
                                        onChange={(e) => setYears(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Area */}
                        <div className="p-6 md:p-12 bg-white/[0.02]">
                            <div className="flex flex-col h-full gap-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Invested Amount</p>
                                        <p className="text-white text-lg md:text-xl font-bold">{formatCurrency(results.totalInvestment)}</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/[0.07]">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Total Value</p>
                                        <p className="text-yellow-500 text-xl md:text-2xl font-bold">{formatCurrency(results.totalValue)}</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-tr from-white/5 to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-center items-center relative overflow-hidden">
                                    {/* Visual Representation (Custom SVG Pie Chart) */}
                                    <div className="relative w-48 h-48 mb-6">
                                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                            <circle
                                                cx="18" cy="18" r="15.8"
                                                fill="transparent"
                                                stroke="rgba(255,255,255,0.05)"
                                                strokeWidth="3.8"
                                            />
                                            <circle
                                                cx="18" cy="18" r="15.8"
                                                fill="transparent"
                                                stroke="#eab308"
                                                strokeWidth="3.8"
                                                strokeDasharray={`${100 - returnPercentage} 100`}
                                            />
                                            <circle
                                                cx="18" cy="18" r="15.8"
                                                fill="transparent"
                                                stroke="#22c55e"
                                                strokeWidth="3.8"
                                                strokeDasharray={`${returnPercentage} 100`}
                                                strokeDashoffset={`-${100 - returnPercentage}`}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Total Value</p>
                                            <p className="text-white text-lg font-black">{formatCurrency(results.totalValue)}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                                            <span className="text-slate-400 text-xs font-medium">Invested</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-green-500 rounded-full" />
                                            <span className="text-slate-400 text-xs font-medium">Returns</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/917205912690?text=Hello%20TradeLikeKK%2C%20I%20want%20to%20start%20my%20investment%20journey."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl text-white font-bold text-lg shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 text-center transition-all transform hover:-translate-y-1"
                                >
                                    Get Expert Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculators;
