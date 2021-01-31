import React  from "react";
import Navigation_bar from '../Components/Navigation_bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../Components/Card";
import entries from "../entries";
import Carousel from '../Components/Carousel';

import Create_Card from "../Components/Create_Card";



function Landing(){
   return(
   <div>
 
  <Navigation_bar/>
   

 <Carousel/>
 
<Create_Card/>
  
   
 
   
   </div>
   );
};

export default Landing;