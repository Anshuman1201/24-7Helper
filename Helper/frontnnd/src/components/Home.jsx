import React from 'react'
import Product from './Product'
import image from "./homei3.jpg"
import './Home.css'

const Home = () => {
    const mystyle = {
        color: "white",
        margin: "auto"
        , marginTop: "40px",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Arial",
        width: "70%"
    };
    const mystyl = {
        display: "flex",
        flexDirection: "row",
        marginTop: "50px"
        , marginLeft: "220px"
        , marginBottom: "40px"
    }
    const backg = {
        background: "linear-gradient(to bottom, white,#5fc3ef, white)"

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
                        <img src="/assets/images/home/img3.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img2.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/img4.jpg" class="d-block w-100" alt="IPhone" height="500px" />
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
            <div>
                <div className='intro'>
                    EMERGENCY PLUMBING<br />
                    CARPENTER,PAINTER<br />
                    <p> We’re open 24/7/365 because<br />
                        Plumbing, Carpenter, Painter, Electrician, etc<br />
                        emerencies don’t wait ...</p>
                </div>
                {/* <div style={{ marginLeft: "560px" }}><img src="/assets/images/home/divBack.jpeg" alt="" /></div> */}
            </div>



            {/* <Product/> */}

            {/* complete */}
            <div className='content'>
                <div className='homei2'>
                    <img src="/assets/images/home/divBack.jpeg" alt="" />
                </div>
                <div className="complete">
                    <h5 style={{margin:'1rem'}}>COMPLETE MAINTENANCE AND REPAIRING SOLUTIONS</h5>
                    <p>MistriBabu® is the perfect place to turn to for all your Apartment, Villa, Office and beyond requirements — from setting up new build projects to maintenance help. We provide first-rate, reliable service to Residential and Commercial sectors. Your satisfaction is our commitment!</p>
                    <p>We take pride in delivering services rendered by professionals who have been verified and qualified. We offer a wide range of services, including <span>plumbing, electrical work, painting, carpentry, interior design, tiling, masonry, cleaning, home and kitchen/bathroom renovations</span>.</p>
                    <p>We are proud to offer the most caring, accessible service in <span>Delhi, Noida, Gurgaon, Bhubaneswar-Odisha, Ranchi, Kolkata, and Bengaluru</span>. We understand our clients' needs and do our utmost to ensure they're taken care of.</p>
                </div>
            </div>

            {/* contactUs */}
            <div className="contact">
                <p>If you have any Helper need, simply call our customer care service</p>
                <h3>INDORE | REWA | GWALIOR | UJJAIN</h3>
                <span>+91 77 88 665 544</span>
            </div>
        </div>
    )
}

export default Home
