import React, { useEffect } from 'react';
import './App.css';
import { menuData } from './MenuData';

function App() {
  // Simple intersection observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-anim').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (index) => {
    const container = document.querySelector('.menu-carousel');
    const element = document.getElementById(`category-${index}`);
    if (container && element) {
      // Calculate horizontal position to center the element
      const scrollLeftPos = element.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
      container.scrollTo({
        left: scrollLeftPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">
            <img src="/ozeis-logo.png" alt="Ozeis Logo" style={{ height: '50px' }} />
          </div>
          <div className="nav-links">
            <a href="#home">Beranda</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Suasana</a>
            <a href="#contact">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <img src="/ozeis-logo.png" alt="Ozeis Cafe" className="hero-logo animate-fade-in" style={{ width: '250px', marginBottom: '20px' }} />
          <h1 className="hero-title animate-fade-in delay-1">OZEIS CAFE</h1>
          <p className="hero-subtitle animate-fade-in delay-2">Est. 2026 • Kopi & Ketenangan</p>
          <a href="#menu" className="btn btn-primary animate-fade-in delay-3">Lihat Menu</a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section menu-section">
        <div className="container">
          <div className="text-center mb-4 scroll-anim">
            <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Menu Pilihan</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Eksplorasi rasa dari bahan-bahan terbaik kami</p>
          </div>
          
          <div className="menu-nav-pills scroll-anim">
            {menuData.map((category, index) => (
              <button 
                key={`nav-${index}`} 
                className="menu-nav-btn"
                onClick={() => scrollToCategory(index)}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="menu-carousel">
            {menuData.map((category, index) => (
              <div key={index} id={`category-${index}`} className="menu-carousel-card scroll-anim">
                <div className="menu-card-header">
                  <h3 className="menu-card-title">{category.category}</h3>
                </div>
                <div className="menu-card-list">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-modern-item">
                      <div className="menu-modern-info">
                        <span className="menu-modern-name">{item.name}</span>
                        {item.isBestSeller && <span className="best-seller-badge">★</span>}
                      </div>
                      
                      <div className="menu-modern-prices">
                        {category.hasHotIce ? (
                           <>
                             {item.priceHot && (
                               <div className="price-pill hot-pill">
                                 <span className="price-label">HOT</span> {item.priceHot}K
                               </div>
                             )}
                             {item.priceIce && (
                               <div className="price-pill ice-pill">
                                 <span className="price-label">ICE</span> {item.priceIce}K
                               </div>
                             )}
                           </>
                        ) : (
                           <div className="price-pill">
                             <span className="price-label">HARGA</span> {item.price}K
                           </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="text-center mb-4 scroll-anim">
            <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>Suasana</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Tempat di mana ide dan cerita bertemu</p>
          </div>
          
          <div className="gallery-grid scroll-anim">
            <div className="gallery-item">
              <img src="/ozeis.photo.png" alt="Cafe interior" />
              <div className="gallery-overlay">
                <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Sudut Nyaman</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/ozeis2.png" alt="Coffee pouring" />
              <div className="gallery-overlay">
                <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Area Kafe</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop" alt="Cafe exterior" />
              <div className="gallery-overlay">
                <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Teras Terbuka</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content scroll-anim">
            <div className="footer-col">
              <h4>Kontak</h4>
              <p>Instagram: @_ozeis_</p>
            </div>
            <div className="footer-col">
              <h4>Jam Operasional</h4>
              <p>Setiap Hari</p>
              <p>08.00 - 24.00</p>
            </div>
            <div className="footer-col">
              <h4>Lokasi</h4>
              <iframe 
                title="Ozeis Cafe Location"
                src="https://maps.google.com/maps?q=Ozeis%20Cafe,%20Citra%20Garden,%20Gowa&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="180" 
                style={{ border: 0, borderRadius: '12px', marginBottom: '1rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>Ruko Flavour Walk, Citra Garden<br/>Blk. D15 No.D12, Paccinongang<br/>Kec. Somba Opu, Kab. Gowa<br/>Sulawesi Selatan 92113</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ozeis Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

