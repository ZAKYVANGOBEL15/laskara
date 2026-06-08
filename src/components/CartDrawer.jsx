import React from 'react';
import { ShoppingBag, X, Minus, Plus, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isCartOpen,
  setIsCartOpen,
  cart,
  handleUpdateCartQty,
  cartTotal,
  formatPrice,
  showToast,
  setCart,
  setSelectedProduct
}) {
  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all"
      />
      {/* Content */}
      <div 
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-serif text-lg tracking-widest uppercase">Tas Belanja ({cart.length})</span>
          </div>
          <button 
            id="close-cart-btn"
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:rotate-90 transition-transform duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#FAFAFA]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-12 h-12 text-neutral-200 mb-4 animate-pulse" />
              <p className="font-serif italic text-neutral-500">Tas belanja Anda kosong.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 border border-black px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-4 border border-neutral-100 hover:shadow-sm transition-shadow">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-20 h-24 object-cover bg-neutral-50 cursor-pointer"
                  onClick={() => { setSelectedProduct(item.product); setIsCartOpen(false); }}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 
                      className="font-serif text-sm hover:underline cursor-pointer"
                      onClick={() => { setSelectedProduct(item.product); setIsCartOpen(false); }}
                    >
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">Ukuran: {item.size} / Warna: {item.color.split(' ')[0]}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-neutral-200 bg-neutral-50">
                      <button 
                        onClick={() => handleUpdateCartQty(index, -1)}
                        className="px-2 py-1 text-neutral-500 hover:text-black transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 py-1 text-xs font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => handleUpdateCartQty(index, 1)}
                        className="px-2 py-1 text-neutral-500 hover:text-black transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-neutral-100 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs tracking-widest uppercase text-neutral-500">Subtotal</span>
              <span className="text-lg font-bold font-serif">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">Pajak dan ongkos kirim dihitung saat checkout. Pengiriman gratis ke seluruh Indonesia.</p>
            <button 
              id="checkout-btn"
              onClick={() => {
                showToast('Pembayaran berhasil! Terima kasih telah berbelanja di LASKARA.');
                setCart([]);
                setIsCartOpen(false);
              }}
              className="w-full bg-black text-white py-4 text-xs tracking-widest uppercase font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              Lanjutkan Ke Pembayaran
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
