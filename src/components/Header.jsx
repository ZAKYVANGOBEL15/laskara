import React, { useState } from 'react';
import { Menu, Search, Heart, ShoppingBag, X } from 'lucide-react';

export default function Header({
  selectedCategory,
  setSelectedCategory,
  setIsSearchOpen,
  setIsWishlistOpen,
  setIsCartOpen,
  wishlist,
  cart
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (category) => {
    setSelectedCategory(category);
    setIsMobileMenuOpen(false);
    // Smooth scroll to catalog
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-neutral-100 z-40 transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#111111] text-[#F9F9F9] text-[10px] tracking-mega py-2.5 px-6 text-center uppercase font-medium relative overflow-hidden">
        <div className="inline-block whitespace-nowrap animate-marquee">
          <span>GRATIS PENGIRIMAN DI SELURUH INDONESIA</span>
          <span className="mx-16">•</span>
          <span>GARANSI PENGEMBALIAN 30 HARI</span>
          <span className="mx-16">•</span>
          <span>KOLEKSI MINIMALIS TERBARU TELAH HADIR</span>
          <span className="mx-16">•</span>
          <span>GRATIS PENGIRIMAN DI SELURUH INDONESIA</span>
          <span className="mx-16">•</span>
          <span>GARANSI PENGEMBALIAN 30 HARI</span>
          <span className="mx-16">•</span>
          <span>KOLEKSI MINIMALIS TERBARU TELAH HADIR</span>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left Menu (Mobile Hamburger / Desktop Links) */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-neutral-800 hover:text-black"
            aria-label="Buka Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium">
            <button 
              onClick={() => { setSelectedCategory('All'); window.scrollTo({top: 800, behavior: 'smooth'}); }}
              className={`hover:text-black py-2 border-b-2 transition-all ${selectedCategory === 'All' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}
            >
              Semua Koleksi
            </button>
            <button 
              onClick={() => { setSelectedCategory('Clothing'); window.scrollTo({top: 800, behavior: 'smooth'}); }}
              className={`hover:text-black py-2 border-b-2 transition-all ${selectedCategory === 'Clothing' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}
            >
              Busana
            </button>
            <button 
              onClick={() => { setSelectedCategory('Accessories'); window.scrollTo({top: 800, behavior: 'smooth'}); }}
              className={`hover:text-black py-2 border-b-2 transition-all ${selectedCategory === 'Accessories' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}
            >
              Aksesoris
            </button>
          </nav>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setSelectedCategory('All'); }}
            className="text-2xl md:text-3xl font-serif tracking-mega uppercase font-light text-[#111111] hover:opacity-85 transition-opacity"
          >
            LASKARA
          </a>
          <span className="text-[7px] tracking-mega text-neutral-400 uppercase -mt-1 font-sans">ATELIER MINIMALIST</span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button 
            id="search-btn"
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-neutral-700 hover:text-black hover:scale-105 transition-all"
            title="Cari"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            id="wishlist-btn"
            onClick={() => setIsWishlistOpen(true)}
            className="p-2 text-neutral-700 hover:text-black hover:scale-105 transition-all relative"
            title="Wishlist"
          >
            <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-black text-black' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full" />
            )}
          </button>

          <button 
            id="cart-btn"
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-neutral-700 hover:text-black hover:scale-105 transition-all relative"
            title="Tas Belanja"
          >
            <ShoppingBag className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-black text-[#F9F9F9] text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        {/* Drawer Panel */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
            <span className="font-serif text-lg tracking-widest uppercase">MENU</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 hover:rotate-90 transition-transform duration-300"
              aria-label="Tutup Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 pt-8 text-sm tracking-widest uppercase font-medium">
            <button 
              onClick={() => handleMobileNavClick('All')}
              className={`text-left py-2 border-b border-neutral-50 transition-colors ${selectedCategory === 'All' ? 'text-black font-semibold' : 'text-neutral-500'}`}
            >
              Semua Koleksi
            </button>
            <button 
              onClick={() => handleMobileNavClick('Clothing')}
              className={`text-left py-2 border-b border-neutral-50 transition-colors ${selectedCategory === 'Clothing' ? 'text-black font-semibold' : 'text-neutral-500'}`}
            >
              Busana
            </button>
            <button 
              onClick={() => handleMobileNavClick('Accessories')}
              className={`text-left py-2 border-b border-neutral-50 transition-colors ${selectedCategory === 'Accessories' ? 'text-black font-semibold' : 'text-neutral-500'}`}
            >
              Aksesoris
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-neutral-100 text-[10px] tracking-widest uppercase text-neutral-400 text-center">
            <span>© LASKARA ATELIER</span>
          </div>
        </div>
      </div>
    </header>
  );
}
