import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div>
            
                <img  className="cart" src={cart.img} alt="" />
                <button onClick={() => handleRemoveFromCart(cart.id)} type="button">Remove</button>
           
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired
        })
    ).isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;