import React from 'react';
import { useShoppingCart} from '../ShopContext/ShopContext';
import { formatCurrency } from '../utilities/formatPrice';
export default function StoreItems({ id, name, price, imgurl }) {
    const {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeCartItem
    }=useShoppingCart();

    const quantity=getItemQuantity(id)
    
    
    return (
        
            <div className='bg-black rounded-lg flex flex-col justify-between items-center border-2 border-white-500 ' style={{width:"300px",height:'300px'}} >
                <img 
                  src={imgurl}
                  
                  style={{width:"200px",height:"200px",objectFit: 'cover'}}  />
                <div className='flex flex-col items-center '>
                <div className='flex gap-16 mx-2'>
                    <div style={{clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)'}} className='bg-red-500 text-xl font-bold w-full text-white px-1 '>{name}</div>
                    <div className='text-white text-opacity-80 text-lg'>{formatCurrency(price)}</div>
                </div>
                <div >
                  {quantity === 0 ?
                    <button className='bg-white text-red rounded-sm p-2 m-2 hover:scale-90 transition-transform duration-300 transform' style={{width:'250px'}} onClick={()=>increaseCartQuantity(id,imgurl,name,price)}>+ADD</button>
                    : 
                    <div className='flex flex-col justify-center'>
                      <div className='flex gap-2 items-baseline '>
                        <button className='bg-white p-2 text-black text-xl font-bold rounded-sm ' onClick={()=>increaseCartQuantity(id,imgurl,name,price)}>+</button>
                        <div className='text-white'><span className='font-bold text-xl text-white'>{quantity}</span> in cart</div>
                        <button className='bg-white p-2 text-black text-xl font-bold rounded-sm ' onClick={()=>decreaseCartQuantity(id)}>-</button>
                      </div>
                      
                      <button className='bg-red-500 rounded-sm m-2 text-white font-medium p-1' onClick={()=>removeCartItem(id)}>Remove</button>
                      
                    </div>
                    
                    }                  
                </div>
                                  
                </div>

            </div>
       
    );
}
