import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Icon from '../components/Icon'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  const getTierClass = (tier) => {
    if (tier === 'vip') return 'tier-vip'
    if (tier === 'premium') return 'tier-premium'
    return 'tier-classic'
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-img">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
      </div>
      {product.badge && (
        <span className={`product-badge ${getTierClass(product.tier)}`}>
          {product.badge}
        </span>
      )}
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-rating">
          <span className="stars">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-footer">
          <div>
            <span className="product-price">{product.price} ر.س</span>
            {product.oldPrice && (
              <span className="product-old-price">{product.oldPrice} ر.س</span>
            )}
          </div>
          <button className="add-cart-btn" onClick={handleAddToCart}>
            <Icon name="add" size={16} />
            السلة
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
