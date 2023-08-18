import React, { useState } from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';
import { facial } from '../DataExport';
import Waxpopup from './Waxpopup';

const Waxing = ({handleClick}) => {
  const [buttonpopup,setbuttonpopup]=useState(false)
  const [product,setproduct]=useState()
  const onclickAbout=(waxitem)=>{
    setbuttonpopup(true)
    setproduct(waxitem)
  }
  const makeover =facial.filter((waxitem) =>waxitem.cat==="waxx")

  return (
    <div>
        

      <div className="facialmaindivsecond">
        <div className="facialtotalbox">
          <div className="itembox">
            {/* 1 */}
            {makeover.map((waxitem)=>
           
            <div className="itemeachmain">
              <div className="itempicture">
                <img
                  className="imageofitems"
                  width="240px"
                  height="240px"
                  src={waxitem.img}
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">{waxitem.title}</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹{waxitem.originalprice} </span>
                        <span className="oldprice">{waxitem.oldprice}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{waxitem.offertext}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{waxitem.save}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time">
                    <img width="20px" height="20px" src={waxitem.png} alt="" />
                    <span>{waxitem.time}</span>
                  </div>
                </div>
                <div className="cartbuttonmedia">
<button  className="booknowbutton" onClick={()=>handleClick(waxitem)}>Book Now</button>
    </div>
                <div className="cartbutton">

        <button  className="booknowbutton" onClick={()=>onclickAbout(waxitem)} >See more</button>

    </div>
              </div>
            </div>
 )}
            {/* 2  */}

            
          </div>
          <div className="secondboxofpopup">

          
          <div className="uu">

    <Waxpopup trigger={buttonpopup} product={product}handleClick={handleClick} setTrigger={setbuttonpopup}/>
    </div>
    </div>
         
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default Waxing