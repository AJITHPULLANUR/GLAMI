import React from 'react'
import { Link } from 'react-router-dom';
import haircut from './Categories/20230719090503_[fpdl.in]_woman-with-long-brown-hair-with-braided-ponytail-black-top_922009-88_normal.jpg';
import color from './Categories/20230719091529_[fpdl.in]_woman-with-long-hair-with-colorful-hair_160117-519_normal.jpg';
import feet from './Categories/20230719092321_[fpdl.in]_womens-feet-rose-petal-bowl-with-water-foot-spa-is-beautiful-generative-ai_864588-4585_normal.jpg';
import arm from './Categories/20230719093530_[fpdl.in]_sparkling-pink-fashion-accessories-glamorous-outfits_804788-4275_normal.jpg';


const Content4 = () => {
  return (
    <div>
        <div className='fourthbody'>
            <div className="bookingtextdiv">
          <span id="animation3" className="bookingtext">Glami with You</span>
        </div>

        <div className="secondsubmain2">


            {/* 1 */}
            <Link className="textdecoration image-containersecond" to="/Haircut">

          <div >
            <div className="fixedtext1">HAIR CUTTING</div>
            <img className="categoryimages"
              width="92%"
              height="360px"
              src={haircut}
              alt=""
            />
          </div>
          </Link>

          {/* 2 */}
          <div className="secondsub2">
          <Link className="textdecoration image-containersecond2" to="/White">

            <div >
            <div class="fixedtext2">HAIR COLORING</div>
            <img className="categoryimages"
              width="92%"
              height="180px"
              src={color}
              alt=""
            />
             
            </div>
            </Link>
            {/* 3 */}
            <Link className="textdecoration image-containersecond3" to="/Gel">

            <div >
            <div class="fixedtext3">PREDICURE</div>
            <img className="categoryimages"
              width="92%"
              height="180px"
              src={feet}
              alt=""
            />
             
            </div></Link>
          </div>

          {/* 4 */}
          <Link className="textdecoration image-containersecond4" to="/Shellac">

          <div >
          <img className="categoryimages"
              width="92%"
              height="360px"
              src={arm}
              alt=""
            />
            <div class="fixedtext4">MANICURE</div>
          </div></Link>
        </div>
        
        </div>
        

    </div>
  )
}

export default Content4