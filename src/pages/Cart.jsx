import React from 'react'
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../ShopContext/ShopContext'
import { formatCurrency } from '../utilities/formatPrice';
export default function Cart() {
  const {
    itemsInCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartItem
  
  }=useShoppingCart();
  const items=itemsInCart()
  let totalPrice=0; 
  items.map((item)=>{
    totalPrice = totalPrice+ item.price*item.quantity
  })
  console.log(items)
  return (
    <div className='flex flex-wrap justify-center gap-12 items-center mt-32 relative'>
      
      <div className='flex flex-col gap-4'>
      {items.map(item=>(
        <div key={item.id} className='flex bg-black rounded-sm border-2 border-red-500 rounded-sm'style={{width:'600px'}}>
          <img src={item.imgurl} style={{width:'400px', height:'200px',objectFit: 'cover'}} />
          <div className='flex flex-col items-center mx-auto justify-between'>
            <div className='text-xl text-white font-bold w-full'>{item.name}</div>
            <div className='text-white'> Sub-Total = {formatCurrency(item.quantity*item.price)}</div>
            <div className='flex flex-col'>
              <div className='flex gap-2 items-baseline '>
                          <button className='bg-white p-2  text-xl font-bold rounded-sm ' onClick={()=>increaseCartQuantity(item.id,item.imgurl,item.name,item.price)}>+</button>
                          <div className='text-white'><span className='font-bold text-white text-xl'>{item.quantity}</span> in cart</div>
                          <button className='bg-white p-2  text-xl font-bold rounded-sm ' onClick={()=>decreaseCartQuantity(item.id)}>-</button>
              </div>
              <button className='bg-red-500 rounded-sm m-2 text-white font-medium p-1' onClick={()=>removeCartItem(item.id)}>Remove</button>
            </div>

          </div>
          
        </div>

        
      ))}        
      </div>

      <div className='flex flex-col gap-4 items-center mb-4 '>
        <div className='border border-red-500 border-dashed bg-black text-white p-4 font-bold text-xl rounded-sm'>Total = {formatCurrency(totalPrice)}</div>
        <div className='flex gap-8 '>
          <NavLink style={{width:'300px'}} className=' bg-red-500 p-2 text-white text-xl font-bold rounded-sm text-center' to='/store'>Continue Shopping</NavLink>
          <button style={{width:'300px'}} className=' bg-red-500 p-2 text-white text-xl font-bold rounded-sm '>Check Out</button>
        </div>
        
      </div>
    </div>
  )
}
