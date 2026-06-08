import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ setSelectedCategory, heroIndex, setHeroIndex }) {
  return (
    <section className="relative h-[80vh] md:h-[90vh] bg-neutral-900 overflow-hidden">
      {/* Slide 1 */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${heroIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="images/blazer.png" 
          alt="Noir Collection" 
          className="w-full h-full object-cover object-top scale-105 animate-pulse-slow" 
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-24 max-w-7xl mx-auto text-white">
          <span className="text-xs md:text-sm tracking-mega uppercase text-neutral-300 font-semibold mb-3 block">KOLEKSI TERBARU '26</span>
          <h2 className="text-4xl md:text-7xl font-serif tracking-wide mb-6 max-w-3xl leading-[1.1]">Estetika Murni dalam Kesederhanaan</h2>
          <p className="text-xs md:text-base text-neutral-300 max-w-md mb-8 leading-relaxed font-light">Menciptakan siluet kontemporer dengan palet hitam & putih terkurasi untuk lemari pakaian modern yang abadi.</p>
          <div>
            <button 
              onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}
              className="inline-flex items-center gap-3 border border-white bg-white text-black hover:bg-transparent hover:text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
            >
              Mulai Menjelajahi
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${heroIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="images/dress.png" 
          alt="Blanc Collection" 
          className="w-full h-full object-cover object-top scale-105 animate-pulse-slow" 
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-24 max-w-7xl mx-auto text-white">
          <span className="text-xs md:text-sm tracking-mega uppercase text-neutral-300 font-semibold mb-3 block">ATELIER EDITION</span>
          <h2 className="text-4xl md:text-7xl font-serif tracking-wide mb-6 max-w-3xl leading-[1.1]">Keindahan Serat Sutra Alami</h2>
          <p className="text-xs md:text-base text-neutral-300 max-w-md mb-8 leading-relaxed font-light">Menampilkan Draped Pure Silk Dress yang dirancang untuk mengikuti gerak tubuh dengan keanggunan alami.</p>
          <div>
            <button 
              onClick={() => { setSelectedCategory('Clothing'); window.scrollTo({top: 800, behavior: 'smooth'}); }}
              className="inline-flex items-center gap-3 border border-white bg-white text-black hover:bg-transparent hover:text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
            >
              Koleksi Sutra
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${heroIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="images/coat.png" 
          alt="Minimalist Architecture" 
          className="w-full h-full object-cover object-top scale-105 animate-pulse-slow" 
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-24 max-w-7xl mx-auto text-white">
          <span className="text-xs md:text-sm tracking-mega uppercase text-neutral-300 font-semibold mb-3 block">ESENSIAL TREN</span>
          <h2 className="text-4xl md:text-7xl font-serif tracking-wide mb-6 max-w-3xl leading-[1.1]">Garis Tegas Mantel Wol</h2>
          <p className="text-xs md:text-base text-neutral-300 max-w-md mb-8 leading-relaxed font-light">Tampil memikat di tengah udara dingin dengan Charcoal Wool Trench Coat yang berkarakter kuat dan klasik.</p>
          <div>
            <button 
              onClick={() => { setSelectedCategory('Clothing'); window.scrollTo({top: 800, behavior: 'smooth'}); }}
              className="inline-flex items-center gap-3 border border-white bg-white text-black hover:bg-transparent hover:text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300"
            >
              Lihat Mantel
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Slider Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setHeroIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${heroIndex === idx ? 'bg-white w-8' : 'bg-white/40'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
