import { Link } from 'react-router-dom'

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
