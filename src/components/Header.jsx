
# Write Header component
header = """import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Icon from './Icon'

function Header() {
  const { cartCount } = useCart()
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-brand">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          خيوط
        </Link>
        <nav className="header-nav">
          <Link to="/" className={isActive('/') ? 'active' : ''}>الرئيسية</Link>
          <Link to="/shop" className={isActive('/shop') ? 'active' : ''}>المتجر</Link>
          <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>لوحة التحكم</Link>
        </nav>
        <div className="header-actions">
          <button className="header-btn">
            <Icon name="search" size={18} />
          </button>
          <button className="header-btn">
            <Icon name="profile" size={18} />
          </button>
          <Link to="/cart" className={`header-btn ${isActive('/cart') ? 'active' : ''}`}>
            <Icon name="cart" size={18} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <button className="theme-toggle">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
"""

with open(f"{base}/src/components/Header.jsx", "w", encoding="utf-8") as f:
    f.write(header)

# Write Footer component
footer = """import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-title">الشركة</div>
          <Link to="/" className="footer-link">من نحن</Link>
          <Link to="/" className="footer-link">سياسة الخصوصية</Link>
          <Link to="/" className="footer-link">الشروط والأحكام</Link>
        </div>
        <div>
          <div className="footer-title">المساعدة</div>
          <Link to="/" className="footer-link">الأسئلة الشائعة</Link>
          <Link to="/" className="footer-link">الشحن والتوصيل</Link>
          <Link to="/" className="footer-link">سياسة الإرجاع</Link>
        </div>
        <div>
          <div className="footer-title">تواصل معنا</div>
          <a href="https://wa.me/966501234567" className="footer-link" target="_blank" rel="noopener">واتساب</a>
          <a href="mailto:hello@khuyoot.com" className="footer-link">البريد الإلكتروني</a>
          <a href="tel:+966501234567" className="footer-link">الهاتف</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 خيوط Khuyoot. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}

export default Footer
"""

with open(f"{base}/src/components/Footer.jsx", "w", encoding="utf-8") as f:
    f.write(footer)

# Write Layout component
layout = """import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <a href="https://wa.me/966501234567" className="whatsapp-btn" target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.75 13.96c.25.13 1.43.66 1.67.75.25.09.43.13.61-.13.17-.26.67-.75.84-.91.17-.17.25-.17.42-.09.17.09.92.42 1.09.5.17.09.25.09.34-.04.09-.13.42-.5.59-.67.17-.17.25-.25.25-.42s-.09-.34-.25-.5c-.17-.17-1.09-.92-1.5-1.26-.42-.34-.84-.25-1.17-.13-.34.13-.59.5-.75.67-.17.17-.34.17-.59.04-.25-.13-1.09-.42-2.09-1.34-1.75-1.59-2.84-3.59-3.09-4.17-.09-.25-.04-.42.13-.59.13-.13.25-.34.38-.5.13-.17.17-.34.25-.5.09-.17.04-.34-.04-.5-.09-.17-.75-1.84-1.09-2.5-.34-.67-.67-.59-.92-.59-.25 0-.5-.04-.75-.04s-.67.09-1.09.5c-.42.42-1.5 1.5-1.5 3.67 0 2.17 1.59 4.26 1.84 4.59.25.34 3.17 4.84 7.67 6.79.92.38 1.67.59 2.25.76.92.25 1.75.21 2.42.13.75-.09 2.34-.96 2.67-1.84.34-.92.34-1.67.25-1.84-.09-.17-.25-.25-.5-.34zM12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.59 1.37 5.11L2 22l5.06-1.37C8.54 21.5 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
        تواصل عبر واتساب
      </a>
    </div>
  )
}

export default Layout
"""

with open(f"{base}/src/components/Layout.jsx", "w", encoding="utf-8") as f:
    f.write(layout)

print("Layout components written!")
