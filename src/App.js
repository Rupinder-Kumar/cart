import { useEffect } from "react";
import { fetchCartItemsAsync } from "./redux/cart/cart.actions";
import { useDispatch , useSelector} from "react-redux";
import CartActionType from "./redux/cart/cart.types";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch(CartActionType)

  useEffect(() => {
    if(!cartItems.length) {
      dispatch(fetchCartItemsAsync());
    }
  },[]);

  return (
    <div className="App">
      <Header/>
      <Checkout />
    </div>
  );
}

export default App;