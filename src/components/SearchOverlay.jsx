import React from 'react';
import { X, Search } from 'lucide-react';

export default function SearchOverlay({
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
  filteredProducts,
  setSelectedProduct,
  formatPrice
}) {
  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/95 z-50 animate-fade-in flex flex-col px-6 md:px-24 py-8">
      <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
        <span className="font-serif text-lg tracking-widest uppercase">Cari Produk</span>
        <button 
          id="close-search-btn"
          onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
          className="p-2 hover:rotate-90 transition-transform duration-300"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex items-center gap-4 py-8 border-b border-neutral-100">
        <Search className="w-6 h-6 text-neutral-400" />
        <input 
          id="search-input"
          type="text" 
          placeholder="Ketik produk, warna, atau kategori..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-2xl font-serif bg-transparent border-none outline-none placeholder:text-neutral-300"
          autoFocus
        />
      </div>
      <div className="flex-1 overflow-y-auto py-6 custom-scrollbar">
        {searchQuery && (
          <div>
            <p className="text-xs tracking-wider uppercase text-neutral-400 mb-4">Hasil pencarian untuk "{searchQuery}"</p>
            {filteredProducts.length === 0 ? (
              <p className="text-neutral-500 font-serif italic">Tidak ada produk yang cocok dengan pencarian Anda.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => { setSelectedProduct(product); setIsSearchOpen(false); }}
                    className="group cursor-pointer flex gap-4 p-3 border border-transparent hover:border-neutral-200 transition-all"
                  >
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover bg-neutral-100" />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-serif text-sm group-hover:underline">{product.name}</h4>
                      <span className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{product.category}</span>
                      <span className="text-sm font-semibold mt-1">{formatPrice(product.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
