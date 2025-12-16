import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoyaltyScreen: React.FC = () => {
     const navigate = useNavigate();
     return (
         <div className="relative z-10 flex flex-col min-h-screen pb-24">
             <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f3a16] via-[#142210] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#142210] via-transparent to-transparent"></div>
            </div>
            
            <header className="sticky top-0 z-50 px-4 pt-6 pb-2 glass-panel border-b-0 rounded-b-xl mb-4">
                <div className="flex items-center justify-between">
                    <button onClick={() => navigate("/")} className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition text-white">
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    </button>
                    <h2 className="text-white text-base font-bold tracking-wide uppercase opacity-90">Loyalty Dashboard</h2>
                    <button className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition text-primary">
                        <span className="material-symbols-outlined text-[20px]">help</span>
                    </button>
                </div>
            </header>
            
            <section className="px-4 mb-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-3xl font-bold tracking-tight mb-1 text-center">Your Sommelier Journey</h1>
                    <div className="flex items-center gap-2 mb-8">
                        <span className="material-symbols-outlined text-primary text-sm">stars</span>
                        <p className="text-primary text-sm font-semibold tracking-wide uppercase">Level 5 • Grand Cru Member</p>
                    </div>
                    <div className="relative w-64 h-80 mb-6 group perspective-1000">
                        <div className="absolute inset-0 rounded-[3rem] border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm overflow-hidden shadow-[0_0_50px_rgba(70,236,19,0.1)] z-20">
                            <div className="absolute top-4 left-4 w-2 h-20 bg-gradient-to-b from-white/40 to-transparent rounded-full opacity-50 z-30"></div>
                            <div className="absolute top-4 right-6 w-1 h-10 bg-gradient-to-b from-white/30 to-transparent rounded-full opacity-30 z-30"></div>
                            <div className="absolute bottom-0 left-0 w-full h-[75%] bg-primary/20 z-10 liquid-anim transition-all duration-1000">
                                <div className="absolute top-0 left-0 w-full h-4 bg-primary/40 blur-sm transform -translate-y-1/2"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent"></div>
                                <div className="bubble w-2 h-2 left-[20%] bottom-4 animate-[bounce_3s_infinite]"></div>
                                <div className="bubble w-3 h-3 left-[60%] bottom-10 animate-[bounce_4s_infinite_0.5s]"></div>
                                <div className="bubble w-1 h-1 left-[40%] bottom-20 animate-[bounce_5s_infinite_1s]"></div>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-40 text-center">
                                <span className="text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">75%</span>
                                <span className="text-xs font-medium text-white/80 mt-1 uppercase tracking-widest">to Vintage Collection</span>
                            </div>
                        </div>
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary blur-[80px] opacity-20 -z-10"></div>
                    </div>
                </div>
            </section>
            
            <section className="px-4 mb-8">
                <div className="grid grid-cols-2 gap-3">
                    <div className="glass-panel rounded-2xl p-4 flex flex-col items-start gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center justify-center size-10 rounded-full bg-[#FF4500]/20 text-[#FF4500]">
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-medium uppercase tracking-wide">Current Streak</p>
                            <p className="text-white text-xl font-bold">7 Days</p>
                        </div>
                    </div>
                    <div className="glass-panel rounded-2xl p-4 flex flex-col items-start gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                            <span className="material-symbols-outlined">wine_bar</span>
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-medium uppercase tracking-wide">Total Points</p>
                            <p className="text-white text-xl font-bold">1,450</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="px-4 flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-lg font-bold">Active Missions</h3>
                    <span className="text-xs text-primary font-bold cursor-pointer hover:underline">View All</span>
                </div>
                <div className="space-y-3">
                    <div className="glass-panel rounded-3xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform duration-200">
                        <div className="flex items-center gap-4">
                            <div className="relative size-12 rounded-2xl overflow-hidden shrink-0">
                                <img alt="Red wine" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXaZ92--l3tfGYOdkFXi3fXVlsnvYWCinIbgdFAjoZIMDkMr5bW_MB26H-AzJfLk1THaSXkfqcDqBO-nFF6SdS1cPW7pVXRgHWIJ0tgKlyKCuw25_c2QRMEUJoVIJs9zEhMG8J70E2zPKnINw4YyhmGB_mZhUjXIcjJjHfQQ8rgtqCBmZZz6kFHIEgD0BQ8VvZ4pC_Rz38qFTmjMt6yHwAQuxRDjNLio2J9YxwNz6yEWHJwsAEABMKZwOBruc-El-U5gEblTxL8IA"/>
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold text-base leading-tight">The Red Collection</h4>
                                <p className="text-white/50 text-xs mt-1">Order 3 different red wines</p>
                            </div>
                        </div>
                        <div className="relative size-10 flex items-center justify-center">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                                <path className="text-primary drop-shadow-[0_0_4px_rgba(70,236,19,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="66, 100" strokeLinecap="round" strokeWidth="4"></path>
                            </svg>
                            <span className="absolute text-[10px] font-bold text-white">2/3</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="fixed bottom-6 inset-x-4 z-50">
                <div className="glass-panel rounded-full p-2 pl-6 flex items-center justify-between shadow-2xl shadow-black/50 bg-[#0a1108]">
                    <div className="flex items-center gap-3">
                        <div className="relative flex size-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-3 bg-primary"></span>
                        </div>
                        <span className="text-white text-sm font-semibold">2 Rewards Available</span>
                    </div>
                    <button className="bg-primary hover:bg-[#3bd10e] text-background-dark font-bold py-3 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(70,236,19,0.4)] flex items-center gap-2">
                        <span>Claim</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </div>
         </div>
     )
}

export default LoyaltyScreen;