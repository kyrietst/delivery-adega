import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CartScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative z-10 flex flex-col min-h-screen pb-48">
             <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] opacity-30"></div>
            </div>
            
            <header className="sticky top-0 z-50 glass-panel px-4 py-3 flex items-center justify-between transition-all duration-300">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white">
                    <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
                </button>
                <h1 className="text-base font-bold tracking-tight text-white/90">Seu Carrinho</h1>
                <div className="w-10 flex justify-center">
                    <span className="text-sm font-semibold text-primary">3</span>
                </div>
            </header>

            <section className="px-4 py-6 w-full max-w-lg mx-auto">
                <div className="glass-panel rounded-xl p-5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -mt-10 -mr-10 pointer-events-none"></div>
                    <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className="flex-1 pr-4">
                            <p className="text-white text-base font-bold leading-tight">Falta pouco!</p>
                            <p className="text-white/70 text-sm font-medium mt-1">
                                Adicione <span className="text-primary font-bold">R$ 15,00</span> para ganhar frete grátis
                            </p>
                        </div>
                        <div className="bg-white/10 p-2 rounded-full text-2xl animate-pulse">🚚</div>
                    </div>
                    <div className="relative w-full h-3 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-neon" style={{width: '85%'}}>
                            <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-50"></div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-mono font-medium text-white/50 relative z-10">
                        <span>R$ 193,00</span>
                        <span>R$ 208,00</span>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 px-4 w-full max-w-lg mx-auto">
                <div className="glass-panel rounded-xl p-3 flex gap-4 items-center group transition-transform active:scale-[0.99]">
                    <div className="relative shrink-0">
                        <div className="w-20 h-20 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEnkFAfHBy_Cue8w-cgBP9apdR0wmtqC3i6Rb1dXxxOGO8ocFnAN_RqrxDvDbKASgnEDohAsW3Vhqv7N3X0muEtf2IaCLUKvgBTDfmF2OzvuT-UTyo5fCksJL_Ovz5WIouZVJePQpgeJ3BBpT_DbnGczwHd9-ayjbHS_DgKXE74T7ebJx5Ac8NkjHU2FUKsAFv1ezrhryTSVN9RbuJwrfKothb_T98JyI84z9iOPPfWlp7Q9XmUZWNwriXVM3aTxA6K_eoAB4FqjM")'}}></div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                        <h3 className="text-white text-base font-bold truncate">Vinho Tinto Malbec</h3>
                        <p className="text-white/60 text-xs">750ml</p>
                        <p className="text-primary font-mono font-medium">R$ 45,00</p>
                    </div>
                    <div className="shrink-0 flex items-center bg-black/30 rounded-full p-1 border border-white/5 backdrop-blur-sm">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors active:bg-white/20">
                            <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-8 text-center font-mono text-sm font-bold">1</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-black shadow-neon hover:brightness-110 transition-all active:scale-95">
                            <span className="material-symbols-outlined text-sm font-bold">add</span>
                        </button>
                    </div>
                </div>
                
                 <div className="glass-panel rounded-xl p-3 flex gap-4 items-center group transition-transform active:scale-[0.99]">
                    <div className="relative shrink-0">
                        <div className="w-20 h-20 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACjvpQsGjjvAwSdBvPN0F47EZbabjc8Cy-btE47Ao6flD6TrtglxUtkCmtPAPjnInzhYnBOqOrlvpo-YkoP6AvanArt7gbp3vzwJ80TllJAGgXskR1q3dzw33gr7QGCTWi3RDDwVV_4W8yCpKh6PhB-T2zltKecDWMMgHXQxV-t8pV5FwBd9APka97wzT43diMDHadv5vQqHrwGr3nh9iYikz0J6wUPtAtoi0MSJr8SHunzh7bJ3g3v7jEfbaVn5JLDpfaAiVt_xQ")'}}></div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                        <h3 className="text-white text-base font-bold truncate">Absolut Vodka</h3>
                        <p className="text-white/60 text-xs">1L</p>
                        <p className="text-primary font-mono font-medium">R$ 89,00</p>
                    </div>
                    <div className="shrink-0 flex items-center bg-black/30 rounded-full p-1 border border-white/5 backdrop-blur-sm">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors active:bg-white/20">
                            <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-8 text-center font-mono text-sm font-bold">1</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-black shadow-neon hover:brightness-110 transition-all active:scale-95">
                            <span className="material-symbols-outlined text-sm font-bold">add</span>
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Upsell */}
            <section className="mt-8 pl-4 pb-4">
                <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-lg">bolt</span>
                    <h2 className="text-lg font-bold text-white">Complete seu pedido</h2>
                </div>
                 <div className="flex overflow-x-auto gap-4 no-scrollbar pr-4 snap-x snap-mandatory">
                    <div className="snap-start glass-panel min-w-[140px] w-[140px] p-3 rounded-xl flex flex-col gap-3 relative overflow-hidden">
                        <div className="aspect-square rounded-lg bg-cover bg-center shadow-inner" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsqiuPg30mD1GqQ9uH9ZlE6ZnScmCl213puTCd3tOG6XTPdMjgTsIZHFHVOzQDA7TZ2hUKEGWOdTaAmE7MtBdYLmACJZF71S4ZDdEW8NHK8O_bHjwvOqjbvD0vgSk5lZ2utaZJ79O9F1OAlom7cg-W2sE_KG3YpJcit9yoLwHYgKLT5pPZ1D9EDeIxjgmuAhZQeF3pMHw4EIBNvXS5GJcrb6RnBND6ayL3bYZm57tkCxD323FmbH2L2GHy6s2RI7zY4720Py9-HUU")'}}></div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-bold leading-tight truncate">Batata Chips</p>
                            <p className="text-xs text-primary font-mono">R$ 8,00</p>
                        </div>
                        <button className="mt-auto w-full py-2 rounded-full bg-white/10 hover:bg-primary hover:text-black transition-all text-xs font-bold border border-white/5 backdrop-blur-sm">
                            Adicionar
                        </button>
                    </div>
                    
                    <div className="snap-start glass-panel min-w-[140px] w-[140px] p-3 rounded-xl flex flex-col gap-3 relative overflow-hidden">
                        <div className="aspect-square rounded-lg bg-cover bg-center shadow-inner" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKVL2BBhKUMlNYQkF8dR6sV0K786eBdJ83mT6aGW8qZ5QDQYlZ3qFxnEVtVp_nIgElxOFVi3KOoYBJISeiqrlUFiHHfLHSaAjTHz9rQWy4u3YVDDH-C_ptxXtq3c856JPb9EYln18ihnh6oEUG32CNuQkUBwRWeJq_xNqvuGrk96mnw_NFaTJxUhoBbTrBp3Kqr7TQZDlFa6FxeQIe9jrZh4ofHHpS-2Ri23G3_3vOk0-u7EZ3Ozdxd-yia-PVaxImK5omS2sHyrE")'}}></div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-bold leading-tight truncate">Cerveja Lata</p>
                            <p className="text-xs text-primary font-mono">R$ 5,50</p>
                        </div>
                        <button className="mt-auto w-full py-2 rounded-full bg-white/10 hover:bg-primary hover:text-black transition-all text-xs font-bold border border-white/5 backdrop-blur-sm">
                            Adicionar
                        </button>
                    </div>
                 </div>
            </section>

            <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6 pt-4">
                <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-xl border-t border-white/5"></div>
                <div className="relative w-full max-w-lg mx-auto flex flex-col gap-4">
                    <div className="flex flex-col gap-1 px-2">
                        <div className="flex justify-between text-sm text-white/60">
                            <span>Subtotal</span>
                            <span className="font-mono">R$ 193,00</span>
                        </div>
                        <div className="flex justify-between text-sm text-white/60">
                            <span>Entrega</span>
                            <span className="font-mono text-primary">R$ 10,00</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-white mt-1">
                            <span>Total</span>
                            <span className="font-mono">R$ 203,00</span>
                        </div>
                    </div>
                    <Link to="/checkout" className="group relative w-full h-14 rounded-full bg-white/10 overflow-hidden flex items-center p-1 cursor-pointer active:scale-[0.98] transition-transform shadow-lg border border-white/5 text-decoration-none">
                        <div className="absolute left-1 z-20 h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-neon">
                            <span className="material-symbols-outlined text-black animate-pulse">arrow_forward</span>
                        </div>
                        <div className="flex-1 text-center pr-4 pl-12">
                            <span className="text-white font-bold tracking-wide group-hover:opacity-100 opacity-90 transition-opacity">Ir para Pagamento</span>
                        </div>
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;