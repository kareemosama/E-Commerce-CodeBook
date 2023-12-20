import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  useTitle(`Cart (${cartList.length})`);
  const { cartList } = useCart();

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
