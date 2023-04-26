import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import './ProductDetail.css';
import SocialCard from './SocialCard';

const ProductDetail = () => {
   
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





    return (
        <div >
     
 {users.map((user,index)=>(
            <SocialCard userData={user} key={index}/>
        )) }


        
        </div>
    )
}

export default ProductDetail
