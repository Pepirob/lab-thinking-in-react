import { useState } from 'react';
import ProductTable from '../components/ProductTable ';
import SearchBar from '../components/SearchBar';
import data from '../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkStock, setcheckStock] = useState(false);

  const handlecheckStock = () => {
    setcheckStock(!checkStock);
  };

  console.log(checkStock);

  return (
    <div style={{ marginTop: '3rem' }}>
      <h2>IronStore</h2>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handlecheckStock={handlecheckStock}
      />
      <ProductTable
        products={products}
        searchQuery={searchQuery}
        checkStock={checkStock}
      />
    </div>
  );
}

export default ProductsPage;
