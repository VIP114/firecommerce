import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

import { doc, getDoc } from "firebase/firestore";
import fireDB from '../fireConfig';
import { useParams } from 'react-router-dom';


function ProductInfo() {
  const [product,setproduct]= useState()
  const params = useParams()
  const [loading,setLoading]= useState(false)

  useEffect(()=>{
      getData1()
  },[])

  async function getData1() {
    try {
        setLoading(true)
        const productTemp = await getDoc(
            doc(fireDB,"products",params.productid)
        )
        console.log('checking',productTemp.data);
        console.log(productTemp.data());
        setproduct(productTemp.data());
        setLoading(false)
        // console.log(productsArray);
    } catch (error) {
        alert("getdata1 function df data not submit")
        setLoading(false)
    }
}
  return (
      <Layout loading={loading }>
          {/* <h1>Product info</h1> */}
          {/* {product && (<h1>{product.name}</h1>)} */}
          <div className='container'>
              <div className="row justify-content-center">
                  <div className="col-md-9">
                  {product &&
          (
              <div>
                  <p><b>{product.name}</b></p>
                  <img src={product.imageURL} style={{color: "red",height:'70vh',marginLeft:'40px',}}/>
                  <hr />
                  <p>{product.description}</p>
                  <div className='d-flex justify-content-center mt-3'>
                  <button className='btn btn-success mx-2'>Add to Cart</button>
                  </div>
              </div>
          )}

                  </div>

              </div>
          </div>
      </Layout>
  )
}

export default ProductInfo;
