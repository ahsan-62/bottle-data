import './Bottles.css'
import{ useState, useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getCartItems, removeFromLS } from '../../utilities/LocalStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {

    const[bottles,setBottles]=useState([]);
    const[cart,setCart]=useState([]);


    useEffect(()=>{
      fetch('bottles.json')
      .then(res=>res.json())
      .then(data=>setBottles(data))
    },[]);

    useEffect(()=>{
        console.log(bottles);
        if(bottles.length>0){
            const storedCart=getCartItems();
            console.log('Hello',storedCart);
           const savedCart=[];
           for(const id of storedCart){
            console.log(id);
            const bottle=bottles.find(bottle=>bottle.id===id);
            console.log(bottle);
            if(bottle){
                savedCart.push(bottle);
            }
        }
        setCart(savedCart);

        }
    },[bottles]);


   

    const handleAddToCart=(boottle)=>{

       const newCart=[...cart,boottle];
       setCart(newCart);
       addToLS(boottle.id);

    }

    const handleRemoveFromCart=(id)=>{
        const remaining=cart.filter(bottle=>bottle.id!==id);
        setCart(remaining);
        removeFromLS(id);
    }

    return (
        <div>
            <h1>Bottles Here:{bottles.length}</h1>
            <div className='cart-container'>
            {
                cart.map(cart=><Cart handleRemoveFromCart={handleRemoveFromCart} key={cart.id} cart={cart}></Cart>)
            }
            </div>
            <h1>Cart:{cart.length}</h1>
            <div className='bottles-container'>
                {bottles.map(bottle=><Bottle  handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)}
            </div>
            
        </div>
    );
};

export default Bottles;