import PropTypes from "prop-types";
import React from "react";
import profilImage from "../improfil.jpg";

const Profile = (props) => {


  return (
  
  <div style={{minHeight:" 100vh", padding: 40}}>
         
        <div >{props.handleName(props.fullName)} </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 3fr",backgroundColor:"#b6ab4d"}}>
        
        <div><img src={props.children} style={{width:320,height:380,marginLeft:"1px"}}  /></div>

        <div>
        <div style={{fontSize:"40px"}}> {props.fullName}</div>
        <div style={{marginTop:"10px",fontSize:"25px",marginLeft:"350px"}}>Junior {props.profession} in Go My Code</div>

        <div style={{fontSize:"1.4rem",textShadow: "2px 2px 4px black",marginRight:"1px",letterSpacing:2,paddingTop:27 }} >{props.bio}</div>
        
        </div>
        
        </div>
        
        
        
        
        
        
        


  </div>
  )
};


export default Profile;

//Default Props

Profile.defaultProps = {
fullName: "Mohamed Amir EL AYNI",
bio: " My Biography Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias Loreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem ipsum dolor sit amet cccccccccccccccccccccccccccccconsectetur adipisicing elit. Dolor quasi sed necessitatibus est voluptatem facere, perferendis pariatur amet accusantium nam repellendus reprehenderit at dolorem sequi quidem, asperiores voluptate, aliquid aut.blanditiis officia culpa tenetur  ad debitis qui delectus, earum, fuga expedita consectetur dignissimos laborum, suscipit est nam molestias aliquid quos mollitia?",
profession:" Web Developer",
children:profilImage,
handleName:(ProfName)=> {alert(`${ProfName}`)}
};


//Check propTypes

Profile.propTypes = {
fullName: PropTypes.string.isRequired,
bio: PropTypes.string.isRequired,
profession: PropTypes.string.isRequired,
children: PropTypes.string.isRequired,
handleName: PropTypes.func.isRequired,
};
