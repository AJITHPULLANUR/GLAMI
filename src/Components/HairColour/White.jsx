import React, { useState } from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';
import { facial } from '../DataExport';
import Haircolorpopup from './Haircolorpopup';

const White = ({handleClick}) => {
  const [buttonpopup,setbuttonpopup]=useState(false)
  const [product,setproduct]=useState()
  const onclickAbout=(coloritem)=>{
    setbuttonpopup(true)
    setproduct(coloritem)
  }
const makeover =facial.filter((coloritem) =>coloritem.cat==="colors")
  return (
    <div>
        
      <div className="facialmaindivsecond">
        <div className="facialtotalbox">
          <div className="itembox">
            {/* 1 */}
{makeover.map((coloritem)=>

            <div className="itemeachmain">
              <div className="itempicture">
                <img
                  className="imageofitems"
                  width="240px"
                  height="240px"
                  src={coloritem.img}
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">{coloritem.title}</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹{coloritem.originalprice} </span>
                        <span className="oldprice">{coloritem.oldprice}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{coloritem.offertext}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{coloritem.save}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time">
                    <img width="20px" height="20px" src={coloritem.png} alt="" />
                    <span>{coloritem.time}</span>
                  </div>
                </div>
                <div className="cartbuttonmedia">
<button  className="booknowbutton" onClick={()=>handleClick(coloritem)}>Book Now</button>
    </div>
                <div className="cartbutton">
<button  className="booknowbutton" onClick={()=>onclickAbout(coloritem)}>See more</button>
    </div>
              </div>
            </div>
            )}

            {/* 2  */}

          </div>
          <div className="secondboxofpopup">

        
          <div className="uu">

<Haircolorpopup trigger={buttonpopup} product={product} handleClick={handleClick}    setTrigger={setbuttonpopup}/>
</div>
</div>  
                  {/* <li><span>Classically attractive faces often exhibit balanced and harmonious features</span></li>
        <li><span>Lips that are neither too thin nor too full are often considered attractive</span></li>
        <li><span>Bright and clear eyes can contribute to the overall attractiveness of a face</span></li>
          <li><span>Clear and smooth skin is generally associated with youth and beauty</span></li> */}
              
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default White