import React from 'react';
import { ChevronRight, X, Heart, Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

export default function ProductDetailView({
  selectedProduct,
  setSelectedProduct,
  wishlist,
  handleToggleWishlist,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
  handleAddToCart,
  formatPrice
}) {
  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-neutral-100 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <button 
            onClick={() => { setSelectedProduct(null); setSelectedSize(''); setSelectedColor(''); }}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-500 hover:text-black transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Kembali ke Katalog
          </button>
          <span className="text-xl font-serif tracking-mega uppercase font-light">LASKARA</span>
          <button 
            id="close-detail-btn"
            onClick={() => { setSelectedProduct(null); setSelectedSize(''); setSelectedColor(''); }}
            className="p-2 hover:rotate-90 transition-transform duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Product Page Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Product Gallery (Left) */}
          <div className="w-full lg:w-3/5 space-y-4">
            <div className="bg-neutral-50 aspect-[4/5] overflow-hidden">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 cursor-zoom-in" 
              />
            </div>
            {/* Micro details images mock grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 aspect-square overflow-hidden flex items-center justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt="Detail 1" 
                  className="w-full h-full object-cover object-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
                />
              </div>
              <div className="bg-neutral-900 aspect-square flex flex-col justify-center p-6 text-white select-none">
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase mb-2">LASKARA DETAIL</span>
                <h4 className="font-serif text-lg mb-2">Pengerjaan Sangat Presisi</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">Setiap bagian dipotong dan dijahit secara manual untuk menjaga orisinalitas bentuk.</p>
              </div>
            </div>
          </div>

          {/* Product Info (Right) */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div>
              {/* Category and wishlist */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs tracking-widest uppercase text-neutral-400 font-semibold">{selectedProduct.category} / {selectedProduct.subCategory}</span>
                <button 
                  onClick={() => handleToggleWishlist(selectedProduct)}
                  className="flex items-center gap-2 text-xs tracking-wider uppercase text-neutral-500 hover:text-black"
                >
                  <Heart className={`w-4 h-4 ${wishlist.some(item => item.id === selectedProduct.id) ? 'fill-black text-black' : ''}`} />
                  {wishlist.some(item => item.id === selectedProduct.id) ? 'Favorit' : 'Tambah Ke Favorit'}
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4 font-normal tracking-wide leading-tight">{selectedProduct.name}</h1>
              
              <p className="text-xl font-semibold text-neutral-900 mb-8">{formatPrice(selectedProduct.price)}</p>

              <div className="space-y-6 border-y border-neutral-100 py-8 mb-8">
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-semibold text-neutral-800 mb-2">Deskripsi</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{selectedProduct.description}</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-semibold text-neutral-800 mb-2">Detail Produk</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{selectedProduct.details}</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-semibold text-neutral-800 mb-2">Komposisi & Perawatan</h4>
                  <p className="text-sm text-neutral-400 font-serif italic">{selectedProduct.specs}</p>
                </div>
              </div>

              {/* Size selector */}
              {selectedProduct.sizing[0] !== 'One Size' && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs tracking-wider uppercase font-semibold text-neutral-700">Pilih Ukuran</span>
                    <span className="text-[10px] text-neutral-400 hover:underline cursor-pointer">Panduan Ukuran</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizing.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-12 h-12 border text-xs tracking-wider flex items-center justify-center transition-all ${
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
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`px-4 py-2 border text-xs tracking-wide flex items-center gap-2 transition-all ${
                        selectedColor === color.name 
                          ? 'border-black bg-[#F9F9F9] text-black font-semibold' 
                          : 'border-neutral-200 text-neutral-500 hover:border-black'
                      }`}
                      title={color.name}
                    >
                      <span 
                        className="w-4 h-4 rounded-full border border-neutral-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add Actions */}
            <div className="space-y-6 pt-6 border-t border-neutral-100 mt-8">
              <div className="flex gap-4">
                <div className="flex items-center border border-neutral-300">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-4 py-4 text-neutral-500 hover:text-black transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold text-sm select-none">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-4 py-4 text-neutral-500 hover:text-black transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct, selectedSize, selectedColor, quantity);
                    setSelectedProduct(null);
                    setSelectedSize('');
                    setSelectedColor('');
                  }}
                  className="flex-1 bg-black text-white text-xs tracking-widest uppercase font-semibold hover:bg-neutral-800 transition-colors py-4 flex items-center justify-center gap-2"
                >
                  Tambahkan ke Tas Belanja
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              
              {/* Delivery & Returns Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-neutral-50 p-4 text-center">
                <div className="flex flex-col items-center p-2 border-r border-neutral-200 last:border-0">
                  <Truck className="w-4 h-4 mb-2 text-neutral-600" />
                  <span className="text-[9px] tracking-wider uppercase text-neutral-800 font-semibold mb-1">Pengiriman Gratis</span>
                  <span className="text-[9px] text-neutral-400">Seluruh Indonesia</span>
                </div>
                <div className="flex flex-col items-center p-2 border-r border-neutral-200 last:border-0">
                  <RotateCcw className="w-4 h-4 mb-2 text-neutral-600" />
                  <span className="text-[9px] tracking-wider uppercase text-neutral-800 font-semibold mb-1">Retur 30 Hari</span>
                  <span className="text-[9px] text-neutral-400">Pengembalian tanpa repot</span>
                </div>
                <div className="flex flex-col items-center p-2 last:border-0">
                  <ShieldCheck className="w-4 h-4 mb-2 text-neutral-600" />
                  <span className="text-[9px] tracking-wider uppercase text-neutral-800 font-semibold mb-1">Garansi Keaslian</span>
                  <span className="text-[9px] text-neutral-400">100% Produk Laskara</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
