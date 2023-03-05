import { Table } from 'react-bootstrap';
import ProductRow from './ProductRow ';

function ProductTable(props) {
  const { products, searchQuery, checkStock } = props;
  return (
    <div>
      <Table bordered hover className="w-75 mx-auto">
        <thead>
          <tr>
            <th style={{ backgroundColor: '#E7ECEF' }}>Name</th>
            <th style={{ backgroundColor: '#E7ECEF' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {checkStock === true
            ? products
                .filter((product) => {
                  return product.inStock === true;
                })
                .map((product) => {
                  return <ProductRow key={product.id} product={product} />;
                })
            : products
                .filter((product) => {
                  let productLowcase = product.name.toLowerCase();
                  let queryLowcase = searchQuery.toLowerCase();
                  return productLowcase.includes(queryLowcase);
                })
                .map((product) => {
                  return <ProductRow key={product.id} product={product} />;
                })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;
