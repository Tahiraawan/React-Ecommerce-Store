import { useState, useEffect } from 'react';
import Header from '../components/homepage/Header';
import ProductsView from '../components/homepage/ProductsView';
import { products } from '../data/products';

function Homepage({ state, dispatch }) {
  const [search, setSearch] = useState('');
  const [shownProducts, setShownProducts] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter((product, index) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });

    setShownProducts(filteredProducts);
  }, [search]);
  
  return (
    <div>
      <Header search={search} setSearch={setSearch} total={shownProducts.length} />
      <ProductsView shownProducts={shownProducts} state={state} dispatch={dispatch} />
    </div>
  )
}

export default Homepage;