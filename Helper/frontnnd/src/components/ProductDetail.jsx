// import React from 'react'
// import { useParams } from 'react-router'
// import { useState, useEffect } from 'react';
// import DATA from '../Data';
// import { useDispatch } from 'react-redux';
// import { addItem, delItem } from '../redux/actions/index'
// import './ProductDetail.css';
// import SocialCard from './SocialCard';
// import './SocialCard.css'
// import Axios from 'axios';

// const ProductDetail = () => {

//     const [users, setusers] = useState([]);

    
//     useEffect(() => {
//         async function getPropertyList() {
//             try {
//                 const res = await Axios.get("http://localhost:5000/carpenter");
//                 setusers(res.data);
//                 console.log();

//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         getPropertyList();
//     }, []);






//     return (
    


//         <div className=''>
//             {
//                 users && users.list[0].map((user) => {
//                     return (
//                         <div >
//                             <div className="card_title"> {user.carp_name} </div>
//                             <div className="card_body">
//                                 <div className='card_data'><h5><b>Phone no. : </b></h5>{user.carp_desc} </div>
//                                 <div className="card_image">{user.carp_price}</div>
//                             </div>
//                         </div >
//                     )
//                 })
//             }
//         </div>


//     )
// }

// export default ProductDetail
