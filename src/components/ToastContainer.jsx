import React from 'react';
import { X, Check } from 'lucide-react';

export default function ToastContainer({ toasts, setToasts }) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 max-w-md w-full px-4 md:px-0 pointer-events-none">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className={`px-5 py-4 shadow-xl border backdrop-blur-md transition-all duration-300 animate-slide-up flex items-center justify-between pointer-events-auto ${
            toast.type === 'error' 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-white/95 border-neutral-200 text-neutral-900'
          }`}
        >
          <span className="text-sm font-medium tracking-wide flex items-center gap-2">
            {toast.type !== 'error' && <Check className="w-4 h-4 text-emerald-600" />}
            {toast.message}
          </span>
          <button 
            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            className="text-neutral-400 hover:text-neutral-900 ml-4 p-2 hover:bg-neutral-100 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            title="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
