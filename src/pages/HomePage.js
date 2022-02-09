import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

import { collection, addDoc, getDocs } from "firebase/firestore";
// import { async } from '@firebase/util';
import fireDB from '../fireConfig';
import { fireproducts } from '../data';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


// import '../stylesheet/HomePage.css'


function HomePage() {
    
    const [products,setproducts]= useState([])
    const navigate= useNavigate()
    const [loading,setLoading]= useState(false)
    
    
    useEffect(()=>{
        getData1()
    },[])
    
    async function addData() {
        try {
            await addDoc(collection(fireDB, "users"), { name: 'shivam', age: 26 })
            
        } catch (error) {
            alert("addData function data not submit")
        }
        
    }
    async function getData() {
        try {
            const users = await getDocs(collection(fireDB, "users"))
            const usersArray = []
            users.forEach((doc) => {
                // console.log(doc.id,"=>",doc.data());
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }
                usersArray.push(obj)
            })
            console.log(usersArray);
        } catch (error) {
            alert("getData function data not submit")
        }
        
    }
    
    function addProductsData() {
        fireproducts.map(async(product)=>{
            try {
                await addDoc(collection(fireDB, "products"),product)
                
            } catch (error) {
                alert("addproductData function data not submit")
            }
        })
    }
    async function getData1() {
        try {
            setLoading(true)
            const users = await getDocs(collection(fireDB, "products"))
            const productsArray = []
            users.forEach((doc) => {
                // console.log(doc.id,"=>",doc.data());
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }
                productsArray.push(obj)
                setLoading(false)
            })
            setproducts(productsArray);
            console.log(productsArray);
        } catch (error) {
            alert("getData1 funciton data not submit")
            setLoading(false)
        }
        
    }

    const {cartItems}  = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    useEffect(() => {
     localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }, [cartItems]);
    
    const addToCart=(product)=>{
        dispatch({type:'ADD_TO_CART',payload:product })
    }
    return (
        <Layout loading={loading}>
            {/* <h1>homepage</h1> */}
            <button className='btn btn-success m-2' onClick={addData}>Add data</button>
            <button className='btn btn-success m-2 ' onClick={getData}>Get data from firebase</button>
            <button className='btn btn-success m-2' onClick={addProductsData}>Add Products Data</button>
            <button className='btn btn-success m-2 ' onClick={getData1}>Get products data from firebase</button>

            <div className='container'>
                <div className="row">
                    {products.map((product)=>{
                         return <div className="col-md-4 ">
                             <div className="m-2 p-1 product position-relative">
                                 <div className='product-content'>
                                     <p>{product.name}</p>
                                     <div className='text-center'>
                                         <img src={product.imageURL} alt="" className='product-img' />
                                     </div>
                                 </div>
                                 <div className="product-actions">
                                     <h2>{product.price} RS/-</h2>
                                     <div className='d-flex'>
                                         <button onClick={()=>addToCart(product)} className='button1 mx-1'>Add to Cart</button>
                                         <button onClick={()=>{
                                             navigate(`/ProductInfo/${product.id}`)
                                         }} className='button1 mx-1'>View</button>
                                     </div>
                                 </div>

                             </div>
                         </div>
                    })}
                </div>
            </div>


        </Layout>

    )
}

export default HomePage;
// 1-10