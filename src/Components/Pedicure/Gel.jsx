import React, { useState } from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';
import { facial } from '../DataExport';
import Predicurepopup from './Predicurepopup';

const Gel = ({handleClick}) => {
  const [buttonpopup,setbuttonpopup]=useState(false)
  const [product,setproduct]=useState()
  const onclickAbout=(pedicureitem)=>{
    setbuttonpopup(true)
    setproduct(pedicureitem)
  }
  const makeover =facial.filter((pedicureitem) =>pedicureitem.cat==="pedi")

  return (
    <div>


      <div className="facialmaindivsecond">
        <div className="facialtotalbox">
          <div className="itembox">
            {/* 1 */}
            {makeover.map((pedicureitem)=>
            
              <div className="itemeachmain">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src={pedicureitem.img}
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">{pedicureitem.title}</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹{pedicureitem.originalprice} </span>
                          <span className="oldprice">{pedicureitem.oldprice}</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                          {pedicureitem.offertext}
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">{pedicureitem.save}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="time">
                      <img width="20px" height="20px" src={pedicureitem.png} alt="" />
                      <span>{pedicureitem.time}</span>
                    </div>
                  </div>
                  <div className="cartbuttonmedia">
<button  className="booknowbutton" onClick={()=>handleClick(pedicureitem)}>Book Now</button>
    </div>
                  <div className="cartbutton">
<button className="booknowbutton" onClick={()=>onclickAbout(pedicureitem)}>See more</button>
    </div>
                </div>
              </div>
)}
            {/* 2  */}

            
          </div>
          <div className="secondboxofpopup">

       
          <div className="uu">

    <Predicurepopup trigger={buttonpopup} product={product} handleClick={handleClick} setTrigger={setbuttonpopup}/>
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

export default Gel