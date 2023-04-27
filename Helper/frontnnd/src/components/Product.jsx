import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DATA from '../Data'
import './ProductDetail.css'


const Product = () => {


    const mystyle={
        display:"flex",
        flexDirection:"row",
        
    }
    const backg={
        background:"linear-gradient(to right, white,#e9f5f8, #5fc3ef)"
    ,width:"30%"
    }
    const cardItem = (item) => {
        return (
            <div class="card my-3 py-4" key={item.id} style={backg}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary m-auto">See more</NavLink>
                </div>
            </div>
        );
    }



    return (
        <div>
            <div className="container py-5">
                
                <div className='we'>
                    <h3>COMPLETE PROPERTY CONSTRUCTION, MAINTENANCE AND REPAIRING SOLUTIONS</h3>
                    <p>We Construct, We Maintain, We Refurbish , We are the Helpers</p>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
           
        </div>
    )
}

export default Product
