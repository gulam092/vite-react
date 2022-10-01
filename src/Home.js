import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./component/Header";
const Home =()=>{
    return <div>
   
<section>
    <Header />
    <h1>Home Page Only</h1>
</section>
       <Outlet/>
    </div>
}

export default Home;