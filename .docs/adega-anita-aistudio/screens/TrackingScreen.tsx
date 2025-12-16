import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrackingScreen: React.FC = () => {
     const navigate = useNavigate();
     return (
         <div className="bg-background-dark text-white font-display overflow-hidden relative h-screen w-full selection:bg-primary selection:text-black">
            <div className="absolute inset-0 z-0 bg-[#0a0f08]">
                <div className="w-full h-full bg-cover bg-center map-layer opacity-60" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWIwNTKxWUP_QbJHvZ-imXfslLg-9MWfgVU9JmaGuADgOvSuOrg4XV9mdDPulmWaLBY_yTwOfwZbcaGNLT0tmGgKJUOoZ0yZeNKZmebzMI89zSFrssvY4yz1bCXu0oLRqy5-jlV3ksgCuBFaCRNeURmxkmi5635QVJ7aUKm9pZbRVvmW6_V8utYruaPli1qQUAgisMrCJRgzxldPoUJ9gijIXZY-a0FJWAw5M-jwtGfQ10kDzdMernY4-U6XMIIbCrKfweQvKO4wY')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="pt-14 px-4 pb-2 pointer-events-auto flex justify-center">
                    <div className="glass-pill rounded-full p-1.5 pl-2 pr-2 flex items-center justify-between gap-4 shadow-lg min-w-[320px] transition-all hover:scale-[1.02] duration-300">
                        <button onClick={() => navigate("/")} className="size-10 flex shrink-0 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        </button>
                        <div className="flex flex-col items-center flex-1 px-2">
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">In Transit</span>
                            </div>
                            <span className="text-sm font-semibold text-white/90">Estimated 12:45 PM</span>
                        </div>
                        <button className="size-10 flex shrink-0 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#9fc992] transition-colors">
                            <span className="material-symbols-outlined text-[20px]">help</span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative w-full pointer-events-auto perspective-[1000px]">
                    <div className="absolute bottom-[30%] right-8 flex flex-col items-center z-0 opacity-80">
                        <div className="glass-pill px-3 py-1 mb-2 rounded-lg text-[10px] font-bold text-white/80">Home</div>
                        <div className="size-12 bg-[#1f3319] border-2 border-[#9fc992] text-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined">home_pin</span>
                        </div>
                    </div>
                    <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 animate-float cursor-pointer group">
                        <div className="relative size-24">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
                            <div className="relative w-full h-full bg-[#142210] rounded-full border-[3px] border-primary flex items-center justify-center shadow-neon overflow-hidden transition-transform active:scale-95 duration-200">
                                <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/100x100/142210/46ec13/Delivery%20Icon')] bg-cover opacity-20"></div>
                                <span className="material-symbols-outlined text-primary text-5xl drop-shadow-[0_0_10px_rgba(70,236,19,0.8)]">scooter</span>
                            </div>
                        </div>
                        <div className="w-16 h-4 bg-black/50 blur-md rounded-[100%] mt-4 scale-x-110"></div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]" xmlns="http://www.w3.org/2000/svg">
                        <path className="opacity-40 drop-shadow-[0_0_8px_rgba(70,236,19,0.5)]" d="M 190 200 Q 250 400 320 600" fill="none" stroke="#46ec13" strokeDasharray="10 6" strokeLinecap="round" strokeWidth="4"></path>
                    </svg>
                </div>

                <div className="w-full pointer-events-auto p-2 pb-6">
                    <div className="glass-panel rounded-[2.5rem] p-5 pt-3 shadow-glass flex flex-col gap-5 relative overflow-hidden transition-transform active:scale-[0.99] duration-300">
                        <div aria-hidden="true" className="w-full flex justify-center pb-2">
                            <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-extrabold text-white leading-none tracking-tight">
                                    Arriving in <br/>
                                    <span className="text-primary drop-shadow-[0_0_15px_rgba(70,236,19,0.3)]">12 mins</span>
                                </h1>
                                <p className="text-[#9fc992] text-sm font-medium mt-2 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Order picked up
                                </p>
                            </div>
                            <div className="relative size-14">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    <path className="text-primary drop-shadow-[0_0_4px_#46ec13]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3"></path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-xl">timer</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full space-y-2">
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                                <div className="h-full bg-primary w-[70%] rounded-full shadow-[0_0_10px_#46ec13]"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors p-3 pr-4 rounded-[1.5rem] border border-white/5 backdrop-blur-sm">
                            <div className="relative shrink-0">
                                <div className="size-14 rounded-full bg-[#2c2c2c] overflow-hidden border-2 border-white/10">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmhV6YbAHkCUy4t088jQhhDPblrPNR-frOodgJkqKaW1TJtIamnPgkBxb7HMF7D4doebef73_1GpKLY8UusJkgbm19smF63Z_OkjvOcDs03zBYhXsMgjmN4a7r4ujzccjTyw_cM6oyS0M0-9jxoC2pSz1AdiLEcC0DB86NGQAxiJb4feSdT14lQpsNnQSYQFUAKrcqUT_9o1ghUHWYpY4dO4ZRpBmPAU2PcAaVEUvu9wuxojR5GBaKyyMJPd3ylwpMMxCmAQOdIg" alt="Driver"/>
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#142210] flex items-center gap-0.5">
                                    4.9 <span className="material-symbols-outlined text-[10px]">star</span>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-bold text-lg truncate">Marcos Silva</h3>
                                <p className="text-white/50 text-xs truncate">Honda PCX • LPT-9822</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="size-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition active:scale-95 border border-white/5">
                                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                </button>
                                <button className="size-11 rounded-full bg-primary text-black flex items-center justify-center shadow-neon hover:brightness-110 transition active:scale-95">
                                    <span className="material-symbols-outlined text-[20px]">call</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     )
}

export default TrackingScreen;