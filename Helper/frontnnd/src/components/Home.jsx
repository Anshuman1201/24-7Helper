import React from 'react'
import Product from './Product'
import image from "./homei3.jpg"

const Home = () => {
    const mystyle = {
        color: "white",
        margin: "auto"
        ,marginTop:"40px",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Arial",
        width:"70%"
      };
      const mystyl={
        display:"flex",
        flexDirection:"row",
        marginTop:"50px"
        ,marginLeft:"220px"
        ,marginBottom:"40px"
    }
const backg={
    background:"linear-gradient(to bottom, white,#5fc3ef, white)"

}

    return (
        <div style={backg}>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={mystyle}>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img3.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/img2.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/img4.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div><div style={mystyl} ><div><b>EMERGENCY PLUMBING<br/>
                         CARPENTER,PAINTER</b><br/>
                         We’re open 24/7/365 because<br/>
                         Plumbing, Carpenter, Painter, Electrician, etc<br/>
                         emerencies don’t wait ...</div>
                         
                         <div style={{marginLeft:"560px"}}><img src="/assets/images/home/divBack.jpeg" alt="" /></div>
                         </div>
                        
                         </div>
                         
                        {/* <Product/> */}
                    </div>
                    )
}

                    export default Home
