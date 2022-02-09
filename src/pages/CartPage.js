import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import {useDispatch, useSelector} from 'react-redux'
import {FaTrash} from 'react-icons/fa'
function CartPage() { 
  const {cartItems}  = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [totalAmout,setTotalAmout]=useState(0)

  useEffect(() => {
    let temp=0;
    cartItems.forEach((cartItems)=>{
      temp=temp+cartItems.price
    })
    setTotalAmout(temp)
  }, [cartItems]);
  

  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
   }, [cartItems]);

  const deleteFromCart=(product)=>{
    dispatch({type:'DELETE_FORM_CART',payload:product })    
    // dispatech({type:"DELETE_FORM_CART",playload: product})
    // console.log(dispatech);

  }

  return (
      <Layout>
          <h1>cart page</h1>
          <table className='table mt-2'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item=>{
                return(
                <tr>
                  <th><img src={item.imageURL} height="90" widhth="80" /></th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><FaTrash onClick={()=>deleteFromCart(item)}/></td>
                </tr>) 
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <h1>
              Total Amout= {totalAmout} Rs
            </h1>
          </div>
          <div className="d-flex justify-content-end">
            <h1>
              <button className='btn btn-primary mt-2 space-right2'>PLACE ORDER</button>
            </h1>
          </div>
          
      </Layout>
  )
}

export default CartPage;
 