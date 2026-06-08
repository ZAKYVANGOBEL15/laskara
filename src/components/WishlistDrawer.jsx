import React from 'react';
import { Heart, X } from 'lucide-react';

export default function WishlistDrawer({
  isWishlistOpen,
  setIsWishlistOpen,
  wishlist,
  handleToggleWishlist,
  handleAddToCart,
  setSelectedProduct,
  formatPrice
}) {
  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isWishlistOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all"
      />
      {/* Content */}
      <div 
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${
          isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-black text-black" />
            <span className="font-serif text-lg tracking-widest uppercase">Wishlist ({wishlist.length})</span>
          </div>
          <button 
            id="close-wishlist-btn"
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 hover:rotate-90 transition-transform duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#FAFAFA]">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <Heart className="w-12 h-12 text-neutral-200 mb-4 animate-pulse" />
              <p className="font-serif italic text-neutral-500">Wishlist Anda kosong.</p>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="mt-6 border border-black px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Jelajahi Produk
              </button>
            </div>
          ) : (
            wishlist.map((product) => (
              <div key={product.id} className="flex gap-4 bg-white p-4 border border-neutral-100 hover:shadow-sm transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-24 object-cover bg-neutral-50 cursor-pointer"
                  onClick={() => { setSelectedProduct(product); setIsWishlistOpen(false); }}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 
                      className="font-serif text-sm hover:underline cursor-pointer"
                      onClick={() => { setSelectedProduct(product); setIsWishlistOpen(false); }}
                    >
                      {product.name}
                    </h4>
                    <span className="text-xs text-neutral-400 uppercase tracking-widest mt-1 inline-block">{product.category}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          handleAddToCart(product, product.sizing[0], product.colors[0].name);
                          handleToggleWishlist(product);
                        }}
                        className="px-3 py-1.5 bg-black text-white text-[10px] tracking-widest uppercase font-semibold hover:bg-neutral-800 transition-colors"
                      >
                        Pindahkan ke Tas
                      </button>
                      <button 
                        onClick={() => handleToggleWishlist(product)}
                        className="p-1 hover:text-red-600 transition-colors text-neutral-400"
                        title="Hapus dari wishlist"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
