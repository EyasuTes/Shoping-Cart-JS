import React from 'react'
import products from "../data/products.json"
import {useShoppingCart} from '../ShopContext/ShopContext'
import { useNavigate } from 'react-router-dom';

export default function ProductTypes() {
  const navigate =useNavigate();
  const {
    chosenCategory
  }=useShoppingCart()
  function handleClick(cate){
    chosenCategory(cate)
    navigate('/store')
  }
  return (
    <div className='text-white flex gap-8 justify-between items-center mx-8 my-32'>
        <div className='flex-1  '>
            <div className='font-bold text-5xl'>Our Products</div>
            <div className='font-bold text-2xl'>Choose from a wide variety of vehicles spare parts</div>
            <div className='font-bold text-2xl text-red-500'>Genuine Spareparts dealer in Dubai for brands like BMW, TOYOTA, MERCEDES, FORD, IVECO, MACK, SUZUKI, and more</div>
        </div>
        
        <div className=' flex-8 flex flex-wrap gap-4'>
            {products.map((product, index)=>(
                <div onClick={()=>handleClick(product.category)} key={index} style={{ height:"300px",width: '300px' }} className='flex flex-col items-center gap-4 border-2 border-red-500 rounded-sm '>
                  <img src={product.img} alt="" className="hover:scale-90 transition-transform duration-300 transform" style={{objectFit: 'cover', height:"300px",width: '300px'}}/> 
                  <div>{product.text}</div> 
                </div>
                
            ))}
        </div>
    </div>
  )
}
