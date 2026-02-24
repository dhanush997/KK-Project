import React from 'react';

const Logo = ({ className = "w-10 h-10", showText = true }) => {
    return (
        <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
            <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border border-white/10 shadow-lg">
                {/* Custom Image Logo with Background Masking */}
                <img
                    src="/logo.png"
                    alt="Trade Like KK"
                    className="w-full h-full object-cover scale-110"
                    style={{
                        maskImage: 'radial-gradient(circle, black 60%, transparent 95%)',
                        WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 95%)'
                    }}
                />
            </div>

            {showText && (
                <div className="flex flex-col -space-y-1">
                    <span className="text-xl font-black text-white tracking-tighter uppercase italic">
                        TradeLike<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">KK</span>
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 tracking-[0.4em] uppercase opacity-70 pl-1">
                        Professional Trading
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
