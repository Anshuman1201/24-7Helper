import './SocialCard.css'

const SocialCard=({userData}) =>{
  const backg={
    background:"linear-gradient(to right, white,#e9f5f8, #5fc3ef)"
  }
return(
    <div className="card" style={backg}>
      <div className="card_title"> {userData.name.first}{userData.name.last}</div> 
       <div className="card_body">
        <div className='card_data'><h5>Phone no. : </h5>{userData.cell} <h5>Email : </h5>{userData.email}</div>
        <div  className="card_image"><img src={userData.picture.medium}></img></div>
       </div>
    </div>
);
};
export default SocialCard;