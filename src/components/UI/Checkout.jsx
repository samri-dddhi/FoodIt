import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import UserProgressContext from "../../store/UserProgress";
import Input from "./Input";
import Button from "./Button";


export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = currencyFormatter.format(cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0));

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }
    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }

            })
        })
    }
    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout} >
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total: {cartTotal}</p>
                <Input label="Name" id="name" type="text" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" type="text" />
                <div className="control-row">
                    <Input label="Postal Code" id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleCloseCheckout}> Close</Button>

                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
}