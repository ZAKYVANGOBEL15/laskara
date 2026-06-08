import React from 'react';
import { Check } from 'lucide-react';

export default function Newsletter({
  newsletterEmail,
  setNewsletterEmail,
  newsletterStatus,
  handleNewsletterSubmit
}) {
  return (
    <section className="bg-[#111111] text-[#F9F9F9] py-24 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs tracking-widest uppercase text-neutral-400 font-semibold mb-4 block">BERGABUNG DENGAN NAWALA KAMI</span>
        <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-6">Dapatkan Akses Eksklusif</h2>
        <p className="text-xs md:text-sm text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed font-light">
          Berlangganan untuk menerima pembaruan koleksi terbaru, rilis terbatas, dan undangan ke acara atelier eksklusif kami langsung ke kotak masuk Anda.
        </p>

        {newsletterStatus === 'success' ? (
          <div className="bg-white/5 border border-white/10 p-6 max-w-md mx-auto rounded-sm animate-fade-in">
            <Check className="w-8 h-8 text-white mx-auto mb-3" />
            <p className="font-serif text-sm">Terima kasih atas langganan Anda. Kami telah mengirimkan konfirmasi ke email Anda.</p>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              id="newsletter-email"
              type="email" 
              placeholder="Alamat email Anda" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-neutral-700 py-3.5 px-1 text-sm text-white focus:border-white outline-none transition-colors placeholder:text-neutral-500"
              required
            />
            <button 
              id="subscribe-btn"
              type="submit"
              className="bg-[#F9F9F9] text-[#111111] hover:bg-neutral-200 transition-colors py-3.5 px-8 text-xs tracking-widest uppercase font-semibold"
            >
              {newsletterStatus === 'loading' ? 'Mengirim...' : 'Berlangganan'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
