import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgress';
export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalItems = cartCtx.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    function handleShowCart() {
        userProgressCtx.showCart(true);
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="FoodIt Logo" />
                <h1>FoodIt</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleShowCart}>Cart({totalItems})</Button>
            </nav>
        </header>
    )
}