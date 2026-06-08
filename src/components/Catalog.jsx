import React from 'react';
import { Heart, Plus } from 'lucide-react';

export default function Catalog({
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  wishlist,
  handleToggleWishlist,
  setQuickViewProduct,
  setSelectedProduct,
  handleAddToCart,
  formatPrice
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full" id="catalog">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-semibold mb-2 block">ATELIER CATALOGUE</span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide text-neutral-950 font-normal m-0">Koleksi Terpilih</h1>
        </div>
        {/* Categories Tab selector */}
        <div className="flex items-center gap-6 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
          {['All', 'Clothing', 'Accessories'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs tracking-widest uppercase pb-2 border-b transition-all ${
                selectedCategory === cat 
                  ? 'border-black text-black font-semibold' 
                  : 'border-transparent text-neutral-400 hover:text-black'
              }`}
            >
              {cat === 'All' ? 'Semua' : cat === 'Clothing' ? 'Busana' : 'Aksesoris'}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-serif italic text-neutral-500">Tidak ada produk yang tersedia saat ini.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const isInWishlist = wishlist.some((item) => item.id === product.id);
            return (
              <div 
                key={product.id} 
                className="group relative flex flex-col bg-white border border-neutral-100 hover:shadow-lg transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-neutral-50 aspect-[3/4] cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-[750ms] ease-out group-hover:scale-105"
                  />
                  
                  {/* Add to Wishlist Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleToggleWishlist(product); }}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-neutral-700 hover:text-black hover:bg-white shadow-sm z-20 transition-all hover:scale-110"
                    title={isInWishlist ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-black text-black' : ''}`} />
                  </button>

                  {/* Quick View Button overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}
                      className="bg-white/90 backdrop-blur-sm text-black w-full py-3 text-xs tracking-widest uppercase font-semibold shadow-md hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      Pratinjau Cepat
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 bg-white">
                  <span className="text-[9px] tracking-widest uppercase text-neutral-400 font-semibold mb-1">{product.category}</span>
                  <h3 
                    onClick={() => setSelectedProduct(product)}
                    className="font-serif text-sm text-neutral-900 group-hover:underline cursor-pointer font-medium line-clamp-1 mb-2"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-4 flex-1">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
                    <span className="text-sm font-bold text-neutral-900">{formatPrice(product.price)}</span>
                    <button
                      onClick={() => handleAddToCart(product, product.sizing[0], product.colors[0].name)}
                      className="text-neutral-800 hover:text-black text-xs font-semibold tracking-wider flex items-center gap-1 group/btn"
                    >
                      Tambah
                      <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
