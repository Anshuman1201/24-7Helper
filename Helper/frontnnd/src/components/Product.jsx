import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DATA from '../Data'


const Product = () => {

    // const [DATA, setDATA] = useState([]);
    // useEffect(() => {
    //     getData();
    // }, []);
    // // async function getData(event) {
    // //     event.preventDefault();
    // //     console.log("login function working");
    // //     const response = await fetch("http://localhost:3000/carpenter", {
    // //         method: "GET",
    // //         headers: {
    // //             "Content-Type": "application/json",
    // //         },
    // //     });

    // //     const data = await response.json();
    // //     setDATA(data)
    // // }
    const mystyle={
        display:"flex",
        flexDirection:"row",
        
    }
    const backg={
        background:"linear-gradient(to right, white,#e9f5f8, #5fc3ef)"
    ,width:"40%"
    }
    const cardItem = (item) => {
       
        return (
            
            <div class="card my-5 py-4" key={item.id} style={backg}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }



    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Call-Us for Hiring</h1>
                        <hr />
                    </div>
                    <div style={mystyle} ><div><b>EMERGENCY PLUMBING<br/>
                         CARPENTER,PAINTER</b><br/>
                         We’re open 24/7/365 because<br/>
                         Plumbing, Carpenter, Painter, Electrician, etc<br/>
                         emerencies don’t wait ...</div>
                         
                         <div style={{marginLeft:"600px"}}><img src="/assets/images/home/divBack.jpeg" alt="" /></div>
                         </div>

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
