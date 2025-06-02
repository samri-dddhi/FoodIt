import { currencyFormatter } from "../../util/formatting"
export default function CartItem({ name, quantity, price, onRemove, onAdd }) {
    return <li className="cart-item">
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={onRemove}>-</button>
            <span>{quantity}</span>
            <button onClick={onAdd}>+</button>
        </p>
    </li>
    }