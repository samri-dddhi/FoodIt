import CartContext from "../../store/CartContext";
import { useContext } from "react";
import Modal from "./Modal";
import { currencyFormatter } from "../../util/formatting";
import UserProgressContext from "../../store/UserProgress";

import Button from "./Button";
import CartItem from "./CartItem";

export default function Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);


    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    function handleGoToCheckout() {
        userProgressCtx.showCheckout(true);
    }
    const cartTotal = cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0)
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => (
                   <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onRemove={() => cartCtx.removeItem(item.id)} onAdd={() => cartCtx.addItem(item)} />
                ))}
            </ul>
            <p className="cart-total">
                Total: {currencyFormatter.format(cartTotal)}
            </p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && (
                    <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
                )}
            </p>
        </Modal>
    );
}