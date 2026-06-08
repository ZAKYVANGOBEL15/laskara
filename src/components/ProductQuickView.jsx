import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function ProductQuickView({
  quickViewProduct,
  setQuickViewProduct,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
  handleAddToCart,
  setSelectedProduct,
  formatPrice
}) {
  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={() => setQuickViewProduct(null)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      {/* Box */}
      <div className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto md:overflow-visible flex flex-col md:flex-row shadow-2xl border border-neutral-100 animate-slide-up rounded-sm z-10 custom-scrollbar">
        <button 
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-neutral-100 z-20 hover:rotate-90 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Panel */}
        <div className="w-full md:w-1/2 bg-neutral-50 flex items-center justify-center">
          <img 
            src={quickViewProduct.image} 
            alt={quickViewProduct.name} 
            className="w-full h-full object-cover max-h-[35vh] md:max-h-[75vh]" 
          />
        </div>

        {/* Content Panel */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <span className="text-xs tracking-widest uppercase text-neutral-400 font-semibold mb-2 block">{quickViewProduct.category}</span>
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-3">{quickViewProduct.name}</h2>
            <p className="text-lg font-bold text-neutral-900 mb-6">{formatPrice(quickViewProduct.price)}</p>
            
            <p className="text-xs text-neutral-500 leading-relaxed mb-6 border-b border-neutral-100 pb-6">{quickViewProduct.description}</p>
            
            {/* Size Selector */}
            {quickViewProduct.sizing[0] !== 'One Size' && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs tracking-wider uppercase font-semibold text-neutral-700">Pilih Ukuran</span>
                  <span className="text-[10px] text-neutral-400 hover:underline cursor-pointer">Panduan Ukuran</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizing.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`w-10 h-10 border text-xs tracking-wider flex items-center justify-center transition-all ${
                        selectedSize === sz 
                          ? 'border-black bg-black text-white font-bold' 
                          : 'border-neutral-200 text-neutral-600 hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            <div className="mb-8">
              <span className="text-xs tracking-wider uppercase font-semibold text-neutral-700 block mb-3">Pilihan Warna</span>
              <div className="flex gap-3">
                {quickViewProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`px-3 py-1.5 border text-xs tracking-wide flex items-center gap-2 transition-all ${
                      selectedColor === color.name 
                        ? 'border-black bg-neutral-50 text-black font-semibold' 
                        : 'border-neutral-200 text-neutral-500 hover:border-black'
                    }`}
                    title={color.name}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-neutral-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4 pt-6 border-t border-neutral-100">
            <div className="flex gap-4">
              {/* Quantity selector */}
              <div className="flex items-center border border-neutral-300">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 py-3 text-neutral-500 hover:text-black transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 font-semibold text-sm select-none">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-3 py-3 text-neutral-500 hover:text-black transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => {
                  handleAddToCart(quickViewProduct, selectedSize, selectedColor, quantity);
                  setQuickViewProduct(null);
                }}
                className="flex-1 bg-black text-white text-xs tracking-widest uppercase font-semibold hover:bg-neutral-800 transition-colors py-4 flex items-center justify-center gap-2"
              >
                Tambah ke Tas Belanja
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
            
            <button 
              onClick={() => {
                setSelectedProduct(quickViewProduct);
                setQuickViewProduct(null);
              }}
              className="w-full border border-neutral-200 text-neutral-700 hover:text-black hover:border-black py-3 text-xs tracking-widest uppercase transition-colors"
            >
              Lihat Detail Produk Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
