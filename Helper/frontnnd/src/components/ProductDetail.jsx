import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import './ProductDetail.css';
import SocialCard from './SocialCard';

const ProductDetail = () => {
    // const [cartBtn, setCartBtn] = useState("Add to Cart")
    // {/* Now we need a product id which is pass from the product page. */}
    // const proid = useParams();
    // const proDetail = DATA.filter(x=>x.id == proid.id)
    // const product = proDetail[0];
    // console.log(product);

    // // We need to store useDispatch in a variable
    // const dispatch = useDispatch()

    // const handleCart = (product) => {
    //     if (cartBtn === "Add to Cart") {
    //         dispatch(addItem(product))
    //         setCartBtn("Remove from Cart")
    //     }
    //     else{
    //         dispatch(delItem(product))
    //         setCartBtn("Add to Cart")
    //     }
    // }
const [users,setusers]=useState([]);

useEffect(()=>{
(async ()=>{
let userData;
try{
    const response=await fetch('https://randomuser.me/api/?results=6');
     userData=(await response.json()).results;
    
}
catch(error){
    console.log(error);
    userData=[];
}
setusers(userData);
})();
},[]);


// const mystyle={
//     display:"flex",
    
//     flexDirection:"column"

// }


    return (
        <div >
     
 {users.map((user,index)=>(
            <SocialCard userData={user} key={index}/>
        )) }


        
        </div>
    )
}

export default ProductDetail
