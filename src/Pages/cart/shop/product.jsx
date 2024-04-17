import React, { useContext } from 'react'
import { ShopContext } from '../../../Context/Shop-context'
const Product = (props) => {
    
   const{addToCart,cartItems}=useContext(ShopContext)


    const {id,productName,price,productImage}=props.data
    const cartItemAmount=cartItems[id]
    return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p>
            <b>{productName}</b>
            </p>
            <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product
