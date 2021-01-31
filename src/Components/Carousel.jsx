import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel(props){
    return(
        
        <div>
                 { <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/image2.jpg" className="d-block w-100" alt="image1"/>
    </div>
    <div className="carousel-item">
      <img src="images/image4.png" className="d-block w-100" alt="image2"/>
    </div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
   }

 </div>

  );
}


export default Carousel;