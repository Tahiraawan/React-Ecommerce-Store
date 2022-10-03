import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetail from '../components/productpage/ProductDetail';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filteredProduct = products.find((p) => {
      return p.id === Number(id);
    });

    setProduct(filteredProduct);
    console.log(filteredProduct);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        <span className="material-icons-outlined">
          arrow_back_ios
        </span>
        View all products
      </Link>
      <ProductDetail product={product} />     
    </div>
  )
}

export default ProductPage;