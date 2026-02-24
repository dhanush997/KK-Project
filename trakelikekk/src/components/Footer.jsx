import React from 'react';
import { Rocket, Twitter, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Logo className="w-10 h-10" />
                        <p className="text-slate-400 leading-relaxed">
                            Empowering traders with precision analytics and expert signals for Delta Exchange and Crypto Futures.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Mentorship', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {['Delta Exchange Futures', 'Bitcoin Options', 'Algo Trading', 'Risk Management', 'Community Access'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Stay Updated</h4>
                        <p className="text-slate-400 mb-4">Get the latest market insights delivered to your inbox.</p>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const name = e.target.elements.name.value;
                                const email = e.target.elements.email.value;
                                if (!name || !email) return;

                                const btn = e.target.querySelector('button');
                                const originalText = btn.innerText;
                                btn.innerText = "Processing...";
                                btn.disabled = true;

                                try {
                                    const { sendRegistrationEmail } = await import('../services/mailService');
                                    await sendRegistrationEmail({ name, email });
                                    alert(`Thanks for registering, ${name}! Welcome to the TradeLikeKK family.`);
                                    e.target.reset();
                                } catch (error) {
                                    console.error("Subscription failed:", error);
                                } finally {
                                    btn.innerText = originalText;
                                    btn.disabled = false;
                                }
                            }}
                            className="space-y-3"
                        >
                            <div className="relative">
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-500"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all placeholder:text-slate-500"
                                />
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                            </div>
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-yellow-500/10 active:scale-[0.98]">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Trade Like KK. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
