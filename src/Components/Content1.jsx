import React from 'react'
import bride from './Carousal images/young-beautiful-stylish-woman-wedding-dress.jpg';
import model from './Carousal images/beautiful-girl-stands-near-walll-with-leaves.jpg';


const Content1 = () => {
  return (
    <div>
        <div className='firstbody'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div  class="carousel-inner">
    <div  class="carousel-item active" data-bs-interval="2000">
      <img  className='image' width="100%" height="430px" src={bride} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img className='image' width="100%" height="430px" src={model} class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
       
        
    </div>
  )
}

export default Content1