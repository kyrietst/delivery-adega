import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CheckoutScreen: React.FC = () => {
     const navigate = useNavigate();
     return (
        <div className="relative mx-auto flex h-screen max-w-md flex-col overflow-hidden bg-[#050505]">
            <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[40%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <header className="relative z-20 flex items-center justify-between px-6 pt-12 pb-4 glass-panel border-b-0 rounded-b-xl shadow-lg">
                <button onClick={() => navigate(-1)} className="group flex size-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 active:scale-95">
                    <span className="material-symbols-outlined text-white" style={{fontSize: '24px'}}>arrow_back_ios_new</span>
                </button>
                <h1 className="flex-1 text-center text-lg font-extrabold tracking-tight text-white drop-shadow-md">Confirm Order</h1>
                <div className="size-10"></div>
            </header>

            <main className="flex-1 overflow-y-auto overflow-x-hidden pb-32 hide-scrollbar relative z-10">
                <div className="flex justify-center pt-6 pb-2">
                    <div className="glass-pill px-4 py-1.5 rounded-full flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm animate-pulse">schedule</span>
                        <p className="text-primary text-sm font-semibold tracking-wide uppercase">Arriving in 35 min</p>
                    </div>
                </div>

                <section className="mt-6 pl-6">
                    <h3 className="mb-4 text-sm font-medium text-white/60 ml-1">Your Selection</h3>
                    <div className="flex gap-4 overflow-x-auto pr-6 pb-8 pt-2 hide-scrollbar snap-x snap-mandatory">
                        <div className="snap-center shrink-0 w-64 glass-panel rounded-2xl p-4 flex flex-col gap-3 group transition-transform hover:scale-[1.02] duration-300">
                            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white/5">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNGYFe7WgZJLFuUsu6FdpS_8HKFL-QfQKGo76xsii4zzG9tNYet1x2rMSvPAYXPx7etX3K5FMvkN-3C-qsPy2qzRL7wRzWMEDXk22YgUw09k1qWfp7Q2Un1qCedV4QCSjjZs5rTvurKtS-q5LFyleqzy5XiSgskhsmW0cpBd6dqoOZhSE6UA-rj1NX5MhjsA9MX_HTo2nQ72WguI-rwIc-CoDcyrIhlvKH9ec0vuhJqf2inXAL6ES7vgUDgGXwDqFNXN6AOM7Bv7M')"}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-3 left-3">
                                    <span className="bg-primary/90 text-background-dark text-xs font-bold px-2 py-1 rounded-md">x2</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="text-lg font-bold leading-tight">Pinot Noir 2018</h4>
                                    <p className="text-white/50 text-xs mt-1">Vintage Reserve</p>
                                </div>
                                <p className="text-primary font-bold">$90.00</p>
                            </div>
                        </div>
                        
                         <div className="snap-center shrink-0 w-64 glass-panel rounded-2xl p-4 flex flex-col gap-3 group transition-transform hover:scale-[1.02] duration-300">
                            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white/5">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACjvpQsGjjvAwSdBvPN0F47EZbabjc8Cy-btE47Ao6flD6TrtglxUtkCmtPAPjnInzhYnBOqOrlvpo-YkoP6AvanArt7gbp3vzwJ80TllJAGgXskR1q3dzw33gr7QGCTWi3RDDwVV_4W8yCpKh6PhB-T2zltKecDWMMgHXQxV-t8pV5FwBd9APka97wzT43diMDHadv5vQqHrwGr3nh9iYikz0J6wUPtAtoi0MSJr8SHunzh7bJ3g3v7jEfbaVn5JLDpfaAiVt_xQ')"}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-3 left-3">
                                    <span className="bg-primary/90 text-background-dark text-xs font-bold px-2 py-1 rounded-md">x1</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="text-lg font-bold leading-tight">Absolut Vodka</h4>
                                    <p className="text-white/50 text-xs mt-1">1L</p>
                                </div>
                                <p className="text-primary font-bold">$55.50</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="px-6 space-y-4">
                    <div className="glass-pill rounded-[2rem] p-2 pr-6 flex items-center gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 shadow-inner">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDHQmSbiipIGDQcwUkSnW_m2lIrr4ugrAsXcyMRq1pJdmHYEnt-vSkPO-EqhSWbKieR0eBkEkX2Z5PmyGreZ-GYdjxs6jnjFU2tT60zGMZWRj-4ZUq5L9uWZ5XCoJY-WsLmoFo5PvlA0VdycjvUvIsg6_tKLIW6YTCo-x3j7fOfiT_h6_5qazZ59fEtaM9tGd6xAeY8yYs0XYtpxf1mNBzPVAZUAfftoeplLc-VhZyiRAo9DaLsHy5X6_Xt10-J7tUIMT-jkX0p9Q')", filter: "grayscale(100%) invert(100%)"}}></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[1px]">
                                <span className="material-symbols-outlined text-white drop-shadow-md">location_on</span>
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-0.5">Shipping Address</p>
                            <p className="text-base font-bold text-white truncate">123 Spatial Ave, Apt 4B</p>
                        </div>
                        <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                        </div>
                    </div>
                    
                     <div className="glass-pill rounded-[2rem] p-2 pr-6 flex items-center gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 shadow-inner bg-white/5 flex items-center justify-center">
                            <span className="material-symbols-outlined text-2xl text-white/80">credit_card</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-0.5">Payment Method</p>
                            <p className="text-base font-bold text-white truncate">Mastercard •••• 9822</p>
                        </div>
                        <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                        </div>
                    </div>
                </section>
            </main>

            <div className="absolute bottom-0 left-0 right-0 z-30 pt-12 pb-8 px-6 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent">
                <div className="flex flex-col items-center mb-8">
                    <span className="text-white/50 text-sm font-medium tracking-widest uppercase mb-1">Total Amount</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-medium text-white/80">$</span>
                        <span className="text-5xl font-extrabold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">145.50</span>
                    </div>
                </div>
                <Link to="/tracking" className="relative h-[4.5rem] w-full rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden group/slider cursor-pointer select-none block">
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <span className="text-white/30 font-semibold text-lg tracking-wide group-hover/slider:text-white/50 transition-colors animate-pulse">Slide to confirm</span>
                    </div>
                    <div className="absolute left-1.5 top-1.5 bottom-1.5 aspect-square rounded-full bg-primary shadow-glow flex items-center justify-center z-10 transition-transform active:scale-95">
                        <span className="material-symbols-outlined text-background-dark text-3xl font-bold">handshake</span>
                    </div>
                     <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
                </Link>
                <div className="h-4 w-full"></div>
            </div>
        </div>
     )
}

export default CheckoutScreen;