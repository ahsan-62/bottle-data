import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {

    const addCart=()=>{

        handleAddToCart(bottle);
    }
    const {img,name,price}=bottle;
    return (
        <div className='bottle'>
            <h3>Name:{name}</h3> <h3>Price:{price}</h3>
            <img className="bottle-img" src={img} alt="" />
            <button onClick={addCart} type="button">Add To Cart</button>
        </div>
    );

    
};

Bottle.propTypes={
    bottle:PropTypes.object,
    handleAddToCart:PropTypes.func,
}


export default Bottle;