function ProductRow(props) {
  const { product } = props;

  //Styles
  const colorRed = {
    color: 'red',
  };

  return (
    <>
      <tr>
        <td style={product.inStock === false ? colorRed : {}}>
          {product.name}
        </td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
