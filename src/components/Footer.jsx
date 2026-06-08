import React from 'react';
import { ExternalLink } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer({ setSelectedCategory }) {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 py-16 text-xs tracking-wider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <span className="font-serif text-lg tracking-mega text-white block">LASKARA</span>
          <p className="text-[11px] leading-relaxed text-neutral-500 font-light max-w-xs">
            Atelier mode modern dengan fokus pada minimalisme, potongan arsitektural terstruktur, dan kemewahan dalam kesederhanaan.
          </p>
        </div>
        <div>
          <h4 className="text-white tracking-widest uppercase font-semibold mb-4">Belanja</h4>
          <ul className="space-y-2.5">
            <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory('Clothing'); window.scrollTo({ top: 800, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Semua Busana</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory('Accessories'); window.scrollTo({ top: 800, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Aksesoris Premium</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Koleksi Terbatas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lookbook Koleksi</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white tracking-widest uppercase font-semibold mb-4">Informasi</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition-colors">Kisah Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Keberlanjutan Serat</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Atelier Lokasi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Karir Atelier</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white tracking-widest uppercase font-semibold mb-4">Hubungi Kami</h4>
          <ul className="space-y-2.5">
            <li><a href="mailto:info@laskara.com" className="hover:text-white transition-colors flex items-center gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> info@laskara.com</a></li>
            <li><a href="tel:+62215551234" className="hover:text-white transition-colors">+62 895402945495</a></li>
            <li className="flex items-center gap-4 pt-3">
              <a href="#" className="hover:text-white transition-colors"><InstagramIcon className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><FacebookIcon className="w-4 h-4" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-neutral-600 text-[10px]">
        <span>© {new Date().getFullYear()} LASKARA ATELIER. HAK CIPTA DILINDUNGI.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
}
