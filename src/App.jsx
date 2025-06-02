import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/UI/Cart';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgress';
import Checkout from './components/UI/Checkout';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
