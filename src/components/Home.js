import Nav from './Navigation';
import Products from './Products';

function Home() {
  return (
    <>
    <Nav />
    This is the home page
    <Products products={['guitar1', 'guitar2', 'guitar3']}/>
    </>
  );
}

export default Home;