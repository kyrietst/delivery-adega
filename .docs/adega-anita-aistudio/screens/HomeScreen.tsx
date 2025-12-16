import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeScreen: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col pb-28">
            {/* Top App Bar */}
            <header className="sticky top-0 z-40 px-5 pt-6 pb-2 flex items-center justify-between glass-panel border-b-0 rounded-b-xl shadow-lg transition-all duration-300">
                <Link to="/loyalty" className="flex items-center gap-3">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARVK7WNQASLKUjKFJdvKkQqmJW0ivLTCgEC9X75dhuHbTyj0I7hPdFDH3ABtnkVrlJvIMWzqJqDaVlEVRQFQ8M_m-PX29eOZ_cjvluuqqgYe04WUEy0W3r1i1WS2U999U2pxu4wi2x3Rlp7gMe7cXdJ6h7yjYFkifLxwV4LjnGvb9wvN_Siviy3fAC9GXPIVtt1U-DXuJXyFLqrygopWSM0Y2Z1iXEb8kRdlOmLg-duDAFMiArBQTRbpMmWMhPeE44Up4wjwCjsuM")'}}></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background-dark"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-white/60 font-medium">Boa noite,</span>
                        <span className="text-sm font-bold text-white leading-none">Gabriel</span>
                    </div>
                </Link>
                <Link to="/loyalty" className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-200 flex items-center justify-center text-background-dark shadow-neon">
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>trophy</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-[10px] text-white/50 uppercase font-bold leading-none tracking-wider">Pontos</span>
                        <span className="text-xs font-bold text-white leading-none">2.450</span>
                    </div>
                </Link>
            </header>

            {/* Search Bar */}
            <div className="px-5 mt-4">
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center w-full h-14 rounded-2xl glass-card-light overflow-hidden transition-transform active:scale-[0.99]">
                        <div className="flex items-center justify-center pl-5 text-primary">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="w-full bg-transparent border-none text-white placeholder:text-white/40 focus:ring-0 px-4 text-base font-medium h-full outline-none" placeholder="O que vamos beber hoje?"/>
                        <div className="pr-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white/70 hover:bg-white/10 cursor-pointer">
                                <span className="material-symbols-outlined">tune</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="mt-8 px-5">
                <div className="flex w-full overflow-x-auto no-scrollbar pb-2 gap-4 snap-x">
                    <div className="flex flex-col items-center gap-2 min-w-[76px] snap-center cursor-pointer group">
                        <div className="w-[76px] h-[76px] rounded-full border-2 border-primary p-1 relative shadow-neon">
                            <div className="w-full h-full rounded-full bg-cover bg-center overflow-hidden relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKVL2BBhKUMlNYQkF8dR6sV0K786eBdJ83mT6aGW8qZ5QDQYlZ3qFxnEVtVp_nIgElxOFVi3KOoYBJISeiqrlUFiHHfLHSaAjTHz9rQWy4u3YVDDH-C_ptxXtq3c856JPb9EYln18ihnh6oEUG32CNuQkUBwRWeJq_xNqvuGrk96mnw_NFaTJxUhoBbTrBp3Kqr7TQZDlFa6FxeQIe9jrZh4ofHHpS-2Ri23G3_3vOk0-u7EZ3Ozdxd-yia-PVaxImK5omS2sHyrE")'}}>
                                <div className="absolute inset-0 bg-black/30"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">sports_bar</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-primary text-xs font-bold">Cervejas</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 min-w-[76px] snap-center cursor-pointer group">
                        <div className="w-[76px] h-[76px] rounded-full border border-white/10 p-1 relative hover:border-white/30 transition-colors bg-white/5">
                            <div className="w-full h-full rounded-full bg-cover bg-center overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBe-zNG5d3jHMyFM4nk0xLwrX5eujwL_9s33gE9hBODd4CL-fNV6BTzJ9b4Mji53i35gzaMkew1aGmsG5mRqgearhU8mHCC9G5BJit3LH-xjGkB1IAzDX_qX6XBNE9nx90ncC74HfXnqrCCj-kipJjJ7AEnSXixIahxyaw4Ftk0yxkI11kCrRQiPMINgad4JbSrfsDPzKul4LZVsGM-KYDKm18uQ68XGSK-iKcv3DxgsmOG0YZaOj9rCTDe4vW7HwP7eHZjtAyd4BM")'}}>
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">wine_bar</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">Vinhos</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 min-w-[76px] snap-center cursor-pointer group">
                        <div className="w-[76px] h-[76px] rounded-full border border-white/10 p-1 relative hover:border-white/30 transition-colors bg-white/5">
                            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">local_bar</span>
                            </div>
                        </div>
                        <p className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">Destilados</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 min-w-[76px] snap-center cursor-pointer group">
                        <div className="w-[76px] h-[76px] rounded-full border border-white/10 p-1 relative hover:border-white/30 transition-colors bg-white/5">
                            <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">water_drop</span>
                            </div>
                        </div>
                        <p className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">Sem Álcool</p>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="px-5 mt-6">
                <Link to="/detail" className="block relative w-full aspect-[4/5] sm:aspect-[2/1] rounded-[2rem] overflow-hidden shadow-glass group cursor-pointer">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM5guC0IQOrQXmmZPdreRVF_qyu35GJ56z5-bRm5ROSviQLj97Z3oTiMQBb-u8RvnZUL63d3COkxyEGkDdLylefbjK0npILoxtJTIHqfAZuX0rNBZUnUmTnr40RMzq0fq_bQXfYuMBE33RuHQhgqOuik3gEZPtRAo218ZZQMuoMtSucRkrCCS9cZUJeXls10rCSGGr312cYNZxB-XB1OOcWFncnKfsr8bmtTN9IH7X-p4FE4VSQIo1zrkR0gZIsMRhl2p_tONc_64")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-90"></div>
                    <div className="absolute top-4 right-4 animate-pulse">
                        <div className="bg-black/30 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            AO VIVO
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-xl">
                            <span className="material-symbols-outlined text-primary text-sm font-bold">local_fire_department</span>
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Modo Esquenta</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
                            Comece a noite <br/>com energia.
                        </h1>
                        <div className="flex items-center justify-between w-full mt-2">
                            <p className="text-white/80 text-sm font-medium max-w-[200px]">Seleção especial de energéticos e destilados.</p>
                            <div className="h-12 w-12 rounded-full bg-primary text-background-dark flex items-center justify-center shadow-neon hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined font-bold">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Products */}
            <div className="px-5 mt-10 mb-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-white">Bairro Favoritos</h2>
                    <p className="text-xs text-white/50">O que seus vizinhos estão pedindo</p>
                </div>
                <a className="text-xs font-bold text-primary hover:text-white transition-colors" href="#">Ver todos</a>
            </div>

            <div className="flex overflow-x-auto no-scrollbar gap-4 px-5 pb-8 snap-x">
                <Link to="/detail" className="min-w-[170px] snap-center">
                    <div className="relative w-full rounded-[2rem] glass-card-light p-3 flex flex-col gap-3 group hover:bg-white/10 transition-colors">
                        <div className="absolute -top-2 -right-2 bg-[#2a2a2a] border border-white/10 backdrop-blur-md flex items-center gap-1 px-2.5 py-1 rounded-full z-10 shadow-lg">
                            <span className="material-symbols-outlined text-primary text-[10px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                            <span className="text-[10px] font-bold text-white uppercase">Trending</span>
                        </div>
                        <div className="relative w-full aspect-[4/5] rounded-[1.5rem] bg-black/20 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACjvpQsGjjvAwSdBvPN0F47EZbabjc8Cy-btE47Ao6flD6TrtglxUtkCmtPAPjnInzhYnBOqOrlvpo-YkoP6AvanArt7gbp3vzwJ80TllJAGgXskR1q3dzw33gr7QGCTWi3RDDwVV_4W8yCpKh6PhB-T2zltKecDWMMgHXQxV-t8pV5FwBd9APka97wzT43diMDHadv5vQqHrwGr3nh9iYikz0J6wUPtAtoi0MSJr8SHunzh7bJ3g3v7jEfbaVn5JLDpfaAiVt_xQ")'}}></div>
                        </div>
                        <div className="px-1 pb-1">
                            <h3 className="font-bold text-white text-base truncate">Absolut Vodka</h3>
                            <p className="text-xs text-white/50 mb-3">1L • Destilados</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg text-white">R$ 89</span>
                                <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark text-white flex items-center justify-center transition-all active:scale-90">
                                    <span className="material-symbols-outlined text-xl">add</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Link to="/detail" className="min-w-[170px] snap-center">
                    <div className="relative w-full rounded-[2rem] glass-card-light p-3 flex flex-col gap-3 group hover:bg-white/10 transition-colors">
                        <div className="relative w-full aspect-[4/5] rounded-[1.5rem] bg-black/20 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5402M3dOBBTmuoZcH2QrstjrAwGzT25uitq_5TbbeINQ2ITdaYZDUZrfDhK8XvRbOKj3b_xrLv66P5tBJJVCgkRRbdaolvzgkz5LDD0ZzOb8LlmWZi660uTAYH1sEOoblFGLvUteV_p81rtrJpE_HVeLDWgIr1h3dzWAQYiUGbX-8KsnjqXuoDPEqzVhBXE71Dgf2x-XOuKpNwEylM1PODQJzeQYGgKUQSck7ZWMshkduAD-IVaQ764AcWA0iWyaPpeFHpnQRx0Q")'}}></div>
                        </div>
                        <div className="px-1 pb-1">
                            <h3 className="font-bold text-white text-base truncate">Malbec Argentino</h3>
                            <p className="text-xs text-white/50 mb-3">750ml • Vinho Tinto</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg text-white">R$ 124</span>
                                <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark text-white flex items-center justify-center transition-all active:scale-90">
                                    <span className="material-symbols-outlined text-xl">add</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <Navbar />
        </div>
    );
};

export default HomeScreen;