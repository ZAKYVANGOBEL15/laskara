import React from 'react';
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';

export default function Header({
  selectedCategory,
  setSelectedCategory,
  setIsSearchOpen,
  setIsWishlistOpen,
  setIsCartOpen,
  wishlist,
  cart
}) {
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
          <button className="md:hidden p-2 text-neutral-800 hover:text-black">
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
    </header>
  );
}
