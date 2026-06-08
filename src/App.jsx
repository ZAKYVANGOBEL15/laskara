import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS } from './data/products';

// Import Components
import ToastContainer from './components/ToastContainer';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import Catalog from './components/Catalog';
import ProductQuickView from './components/ProductQuickView';
import ProductDetailView from './components/ProductDetailView';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  // Application State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [heroIndex, setHeroIndex] = useState(0);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchQuery.trim() !== '') {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  // Hero Slider Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Add to Cart Logic
  const handleAddToCart = (product, size, color, qty = 1) => {
    if (!size && product.sizing.length > 0 && product.sizing[0] !== 'One Size') {
      showToast('Silakan pilih ukuran terlebih dahulu.', 'error');
      return;
    }
    const chosenSize = size || product.sizing[0];
    const chosenColor = color || product.colors[0].name;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === chosenSize && item.color === chosenColor
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += qty;
        return newCart;
      } else {
        return [...prevCart, { product, size: chosenSize, color: chosenColor, quantity: qty }];
      }
    });

    showToast(`${product.name} telah ditambahkan ke tas belanja.`);
    // Reset inputs
    setQuantity(1);
  };

  // Remove / Edit Cart Quantity
  const handleUpdateCartQty = (index, delta) => {
    const item = cart[index];
    if (!item) return;

    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
      showToast('Item dihapus dari tas belanja.');
    } else {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[index] = { ...newCart[index], quantity: newQty };
        return newCart;
      });
    }
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product) => {
    const isFav = wishlist.some((item) => item.id === product.id);
    if (isFav) {
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
      showToast(`${product.name} dihapus dari daftar keinginan.`);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      showToast(`${product.name} ditambahkan ke daftar keinginan.`);
    }
  };

  // Format IDR Price
  const formatPrice = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value);
  };

  // Newsletter Submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      showToast('Terima kasih! Anda telah berlangganan nawala kami.');
    }, 1000);
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  // Set defaults when quick view product or selected product changes
  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizing[0] === 'One Size' ? 'One Size' : '');
      setSelectedColor(quickViewProduct.colors[0].name);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedSize(selectedProduct.sizing[0] === 'One Size' ? 'One Size' : '');
      setSelectedColor(selectedProduct.colors[0].name);
      setQuantity(1);
    }
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#F9F9F9] flex flex-col">
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} setToasts={setToasts} />

      {/* Full-screen Search Overlay */}
      <SearchOverlay 
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredProducts={filteredProducts}
        setSelectedProduct={setSelectedProduct}
        formatPrice={formatPrice}
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        handleUpdateCartQty={handleUpdateCartQty}
        cartTotal={cartTotal}
        formatPrice={formatPrice}
        showToast={showToast}
        setCart={setCart}
        setSelectedProduct={setSelectedProduct}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer 
        isWishlistOpen={isWishlistOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        wishlist={wishlist}
        handleToggleWishlist={handleToggleWishlist}
        handleAddToCart={handleAddToCart}
        setSelectedProduct={setSelectedProduct}
        formatPrice={formatPrice}
      />

      {/* HEADER / NAVIGATION */}
      <Header 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setIsSearchOpen={setIsSearchOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        setIsCartOpen={setIsCartOpen}
        wishlist={wishlist}
        cart={cart}
      />

      {/* HERO SLIDER */}
      <Hero 
        setSelectedCategory={setSelectedCategory}
        heroIndex={heroIndex}
        setHeroIndex={setHeroIndex}
      />

      {/* MARQUEE BANNER */}
      <div className="bg-[#F9F9F9] py-8 border-b border-neutral-100 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee text-[11px] tracking-mega text-neutral-400 font-medium uppercase">
          <span>L A S K A R A  •  M I N I M A L I S T  •  A T E L I E R  •  Q U A L I T Y  •  E S S E N T I A L S  •  L U X U R Y</span>
          <span className="mx-16">•</span>
          <span>L A S K A R A  •  M I N I M A L I S T  •  A T E L I E R  •  Q U A L I T Y  •  E S S E N T I A L S  •  L U X U R Y</span>
          <span className="mx-16">•</span>
          <span>L A S K A R A  •  M I N I M A L I S T  •  A T E L I E R  •  Q U A L I T Y  •  E S S E N T I A L S  •  L U X U R Y</span>
        </div>
      </div>

      {/* VALUE PROPOSITION / VALUES */}
      <Values />

      {/* CATALOG SECTION */}
      <Catalog 
        filteredProducts={filteredProducts}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        wishlist={wishlist}
        handleToggleWishlist={handleToggleWishlist}
        setQuickViewProduct={setQuickViewProduct}
        setSelectedProduct={setSelectedProduct}
        handleAddToCart={handleAddToCart}
        formatPrice={formatPrice}
      />

      {/* QUICK VIEW MODAL */}
      <ProductQuickView 
        quickViewProduct={quickViewProduct}
        setQuickViewProduct={setQuickViewProduct}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
        setSelectedProduct={setSelectedProduct}
        formatPrice={formatPrice}
      />

      {/* PRODUCT DETAIL SCREEN */}
      <ProductDetailView 
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        wishlist={wishlist}
        handleToggleWishlist={handleToggleWishlist}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
        formatPrice={formatPrice}
      />

      {/* NEWSLETTER */}
      <Newsletter 
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        newsletterStatus={newsletterStatus}
        handleNewsletterSubmit={handleNewsletterSubmit}
      />

      {/* FOOTER */}
      <Footer setSelectedCategory={setSelectedCategory} />

    </div>
  );
}

export default App;
