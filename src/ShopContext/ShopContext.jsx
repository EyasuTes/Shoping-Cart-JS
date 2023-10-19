import React,{createContext, useContext, useState} from "react";
import shopItems from '../data/items.json'

const ShoppingCartContext =createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    const [cartItems, setCartItems]=useState([])
    const [category, setCategory]=useState(shopItems)
    const [currentCategory, setCurrentCategory]=useState('')

    function getItemQuantity(id){
        const item = cartItems.find((item)=>item.id===id)
        if(item){
            return item.quantity
        }
        else{
            return 0
        }
    }
    function increaseCartQuantity(id, imgurl ,name,price) {
        const item = cartItems.find((item) => item.id === id);
        if (!item) {
          setCartItems([...cartItems, { id: id,imgurl:imgurl,name:name,price:price, quantity: 1 }]);
        } else {
          setCartItems((cartItems) =>
            cartItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            })
          );
        }
      }
      function decreaseCartQuantity(id) {
        setCartItems((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
          }
        });
      }
    function removeCartItem(id){
        setCartItems(cartItems.filter(item=>item.id!==id))
    }
    function totalItems(){
        let count=0;
        cartItems.map(item=>{
            count=count+item.quantity

        })
        return count
    }
    function itemsInCart(){
        let items= cartItems.filter(item=>item.quantity>0);
        
        return items
        
    }
    function chosenCategory(cate){
      
        if (cate) {
          const filteredItems = shopItems.filter((item) => item.category === cate);
          setCategory(filteredItems);
          console.log(filteredItems)
          setCurrentCategory(filteredItems[0].category)
        } else {
          setCategory(shopItems);
          setCurrentCategory('')
        }
      
      
    }
    function getCategory(){
      return category

    }
    function getCurrentCategory(){
      return currentCategory
    }

    return(
        <ShoppingCartContext.Provider value={{getCurrentCategory, getCategory, chosenCategory, itemsInCart ,totalItems,getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeCartItem}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}