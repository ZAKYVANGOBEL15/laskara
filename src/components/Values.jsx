import React from 'react';
import { SlidersHorizontal, Check, RotateCcw } from 'lucide-react';

export default function Values() {
  return (
    <section className="bg-white py-16 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center mb-6 bg-neutral-50">
            <SlidersHorizontal className="w-5 h-5 text-neutral-800" />
          </div>
          <h3 className="font-serif text-lg uppercase tracking-wider mb-3 text-neutral-900">Desain Terstruktur</h3>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Setiap jahitan dipikirkan secara cermat untuk menciptakan siluet geometris bersih yang mempertegas jati diri Anda.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center mb-6 bg-neutral-50">
            <Check className="w-5 h-5 text-neutral-800" />
          </div>
          <h3 className="font-serif text-lg uppercase tracking-wider mb-3 text-neutral-900">Bahan Premium Alami</h3>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Kami menyeleksi wol murni merino, serat sutra Mulberry, dan kulit berkualitas tinggi untuk kualitas yang tahan lama.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center mb-6 bg-neutral-50">
            <RotateCcw className="w-5 h-5 text-neutral-800" />
          </div>
          <h3 className="font-serif text-lg uppercase tracking-wider mb-3 text-neutral-900">Estetika Monokrom</h3>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Palet warna hitam, abu-abu, dan putih untuk kemudahan padu padan (capsule wardrobe) yang berkelas dan fungsional.</p>
        </div>
      </div>
    </section>
  );
}
