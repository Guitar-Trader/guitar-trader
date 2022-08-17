import Product from './Product';
import Stack from '@mui/material/Stack';

function Products(props) {
  return (
    <>
    <Stack direction='row'>
      {props.products.map((product) => {
        return <Product product={product} />
      })}
    </Stack>
  </>
  );
}

export default Products;