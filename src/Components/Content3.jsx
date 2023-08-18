import React from 'react'
import make from './Carousal images/make.jpg';
import hair from './Carousal images/ha.jpg';



const Content3 = () => {
  return (
    <div>
        <div className='thirdbody'>

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div id='inner' class="carousel-inner">
    <div class="carousel-item active">
      <img id='carousalbig' width="98%" height="430px" src={make} class="d-block w-98" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id='carousalbig'  width="98%" height="430px" src={hair} class="d-block w-98" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default Content3