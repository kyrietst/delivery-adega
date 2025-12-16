import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    
    // Simple check to determine active state
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-sm">
            <nav className="w-full h-[72px] rounded-full bg-[#1e2e1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-evenly px-2 relative">
                <div className="absolute bottom-0 left-[14%] w-8 h-8 bg-primary/20 blur-xl rounded-full"></div>
                
                <Link to="/" className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all ${isActive('/') ? 'text-primary' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                    <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: isActive('/') ? "'FILL' 1" : "'FILL' 0"}}>home</span>
                    {isActive('/') && <span className="w-1 h-1 rounded-full bg-primary absolute bottom-2"></span>}
                </Link>
                
                <button className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all">
                    <span className="material-symbols-outlined text-[26px]">grid_view</span>
                </button>
                
                <Link to="/cart" className="flex items-center justify-center w-14 h-14 -mt-8 rounded-full bg-primary text-background-dark shadow-neon hover:scale-110 transition-transform border-4 border-background-dark">
                    <span className="material-symbols-outlined text-[28px] font-bold">shopping_bag</span>
                </Link>
                
                <button className="flex flex-col items-center justify-center w-14 h-14 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all">
                    <span className="material-symbols-outlined text-[26px]">favorite</span>
                </button>
                
                <Link to="/loyalty" className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all ${isActive('/loyalty') ? 'text-primary' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                    <span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: isActive('/loyalty') ? "'FILL' 1" : "'FILL' 0"}}>person</span>
                    {isActive('/loyalty') && <span className="w-1 h-1 rounded-full bg-primary absolute bottom-2"></span>}
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;