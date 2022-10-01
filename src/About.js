import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./component/Header";
const About =()=>{

   const navigate = useNavigate();
   const goToContact =() =>{
      navigate('/contact');
   }
    return <div> 
         <Header></Header>
         <section>
            <h1>About Page</h1>
            <button onClick ={()=>goToContact()}>Go To contcat page</button>
         </section>
</div>
}

export default About;