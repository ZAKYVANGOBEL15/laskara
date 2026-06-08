import React from 'react';
import { SlidersHorizontal, Check, RotateCcw } from 'lucide-react';

export default function Values() {
  return (
    <section className="bg-white py-10 md:py-16 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-3 gap-4 md:gap-12 text-center">
        <div className="flex flex-col items-center p-2 md:p-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-100 flex items-center justify-center mb-3 md:mb-6 bg-neutral-50">
            <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5 text-neutral-800" />
          </div>
          <h3 className="font-serif text-[11px] md:text-lg uppercase tracking-wider mb-1 md:mb-3 text-neutral-900">Desain Terstruktur</h3>
          <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed max-w-xs hidden md:block">Setiap jahitan dipikirkan secara cermat untuk menciptakan siluet geometris bersih yang mempertegas jati diri Anda.</p>
        </div>
        <div className="flex flex-col items-center p-2 md:p-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-100 flex items-center justify-center mb-3 md:mb-6 bg-neutral-50">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-neutral-800" />
          </div>
          <h3 className="font-serif text-[11px] md:text-lg uppercase tracking-wider mb-1 md:mb-3 text-neutral-900">Bahan Premium</h3>
          <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed max-w-xs hidden md:block">Kami menyeleksi wol murni merino, serat sutra Mulberry, dan kulit berkualitas tinggi untuk kualitas yang tahan lama.</p>
        </div>
        <div className="flex flex-col items-center p-2 md:p-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-100 flex items-center justify-center mb-3 md:mb-6 bg-neutral-50">
            <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-neutral-800" />
          </div>
          <h3 className="font-serif text-[11px] md:text-lg uppercase tracking-wider mb-1 md:mb-3 text-neutral-900">Estetika Monokrom</h3>
          <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed max-w-xs hidden md:block">Palet warna hitam, abu-abu, dan putih untuk kemudahan padu padan (capsule wardrobe) yang berkelas dan fungsional.</p>
        </div>
      </div>
    </section>
  );
}
