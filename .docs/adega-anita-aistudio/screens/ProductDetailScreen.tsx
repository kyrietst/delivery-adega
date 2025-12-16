import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProductDetailScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative w-full h-screen flex flex-col max-w-md mx-auto overflow-hidden bg-background-dark shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-b from-[#2c4823] via-background-dark to-background-dark opacity-60 z-0"></div>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
            
            <nav className="absolute top-0 inset-x-0 z-50 p-5 flex justify-between items-center mt-2">
                <button onClick={() => navigate(-1)} aria-label="Go back" className="size-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-200 flex items-center justify-center text-white group">
                    <span className="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
                </button>
                <div className="flex gap-3">
                    <button aria-label="Share" className="size-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-200 flex items-center justify-center text-white group">
                        <span className="material-symbols-outlined text-[20px]">ios_share</span>
                    </button>
                    <button aria-label="Add to favorites" className="size-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-200 flex items-center justify-center text-white group">
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-white">favorite</span>
                    </button>
                </div>
            </nav>

            <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar z-10 relative pb-32">
                <div className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center pt-10 perspective-1000">
                    <div className="w-[65%] h-[85%] bg-contain bg-center bg-no-repeat relative z-20 drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5402M3dOBBTmuoZcH2QrstjrAwGzT25uitq_5TbbeINQ2ITdaYZDUZrfDhK8XvRbOKj3b_xrLv66P5tBJJVCgkRRbdaolvzgkz5LDD0ZzOb8LlmWZi660uTAYH1sEOoblFGLvUteV_p81rtrJpE_HVeLDWgIr1h3dzWAQYiUGbX-8KsnjqXuoDPEqzVhBXE71Dgf2x-XOuKpNwEylM1PODQJzeQYGgKUQSck7ZWMshkduAD-IVaQ764AcWA0iWyaPpeFHpnQRx0Q")'}}></div>
                    <div className="absolute right-6 top-[25%] bg-background-dark/60 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-3 flex flex-col items-center gap-0.5 rotate-12 animate-[float_4s_ease-in-out_infinite]">
                        <span className="text-primary font-extrabold text-xl leading-none">98</span>
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-80">Points</span>
                    </div>
                </div>

                <div className="relative z-30 px-3 -mt-4">
                    <div className="bg-background-dark/60 backdrop-blur-xl border border-white/10 shadow-xl rounded-t-[2.5rem] rounded-b-[2.5rem] p-6 pb-24 ring-1 ring-white/5">
                        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6"></div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Catena Zapata</h2>
                                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">Malbec <br/>Argentino</h1>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-start gap-0.5 text-primary">
                                    <span className="text-lg font-bold mt-1">R$</span>
                                    <span className="text-4xl font-bold tracking-tighter shadow-primary drop-shadow-[0_0_15px_rgba(70,236,19,0.3)]">124</span>
                                </div>
                                <span className="text-xs text-gray-400 font-medium mt-1">por garrafa</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                                <span className="material-symbols-outlined text-[16px] text-primary">eco</span>
                                <span className="text-xs font-semibold text-gray-200">Organic</span>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                                <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                                <span className="text-xs font-semibold text-gray-200">Verified</span>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                                <span className="material-symbols-outlined text-[16px] text-primary">wine_bar</span>
                                <span className="text-xs font-semibold text-gray-200">Full Body</span>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-white mb-3">Tasting Notes</h3>
                            <p className="text-gray-300 text-sm leading-7 font-medium opacity-90">
                                A rich and immersive experience with deep violet hues. The nose offers intense aromas of blackberries and dark chocolate, with a hint of spicy black pepper. The palate is full-bodied with velvety tannins and a long, persistent finish that echoes the terroir of the Andes.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                            <div className="bg-white/5 rounded-[1.5rem] p-4 flex flex-col items-center justify-center gap-2 border border-white/5">
                                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-[18px]">water_drop</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">ABV</span>
                                    <span className="block font-bold text-sm">14.5%</span>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-[1.5rem] p-4 flex flex-col items-center justify-center gap-2 border border-white/5">
                                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Ano</span>
                                    <span className="block font-bold text-sm">2020</span>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-[1.5rem] p-4 flex flex-col items-center justify-center gap-2 border border-white/5">
                                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-[18px]">flag</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Região</span>
                                    <span className="block font-bold text-sm">Mendoza</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 z-50 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pt-12">
                <div className="bg-background-dark/60 backdrop-blur-xl border border-white/10 shadow-xl rounded-full p-2 pr-2.5 flex items-center justify-between shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center gap-4 px-3">
                        <button className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all">
                            <span className="material-symbols-outlined text-lg">remove</span>
                        </button>
                        <span className="font-bold text-xl min-w-[24px] text-center text-white">1</span>
                        <button className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all">
                            <span className="material-symbols-outlined text-lg">add</span>
                        </button>
                    </div>
                    <Link to="/cart" className="flex-1 bg-primary text-background-dark h-14 rounded-full font-extrabold text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(70,236,19,0.3)] hover:shadow-[0_0_35px_rgba(70,236,19,0.5)] active:scale-95 transition-all">
                        <span>Adicionar</span>
                        <span className="material-symbols-outlined text-[20px] font-bold">shopping_bag</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailScreen;