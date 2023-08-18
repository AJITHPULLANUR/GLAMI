import React, { useState } from "react";
import logo from "../Components/Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Components/Logo and Icons/girl.png";
import carts from "../Components/Logo and Icons/bag.png";
import { glami } from "../Components/DataExport";
import { Link } from "react-router-dom";
import clock from "../Components/Facial/circular-alarm-clock-tool.png";
import Footer2 from "../Components/Footer/Footer2";
import { facial } from "../Components/DataExport";
import Makeuppopup from "./Makeuppopup";

const BridalMakeup = ({handleClick}) => {
  const [buttonpopup,setbuttonpopup]=useState(false)
  const [product,setproduct]=useState()
  const onclickAbout=(makeupitem)=>{
    setbuttonpopup(true)
    setproduct(makeupitem)
  }
  const makeover =facial.filter((makeupitem) =>makeupitem.cat==="make")

  return (
    <div>
      

      <div className="facialmaindivsecond">
        <div className="facialtotalbox">
          <div className="itembox">
            {/* 1 */}
            {makeover.map((makeupitem)=>
           
            <div className="itemeachmain">
              <div className="itempicture">
                <img
                  className="imageofitems"
                  width="240px"
                  height="240px"
                  src={makeupitem.img}
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">{makeupitem.title}</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹{makeupitem.originalprice}</span>
                        <span className="oldprice">{makeupitem.oldprice}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{makeupitem.offertext}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{makeupitem.save}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time">
                    <img width="20px" height="20px" src={makeupitem.png} alt="" />
                    <span>{makeupitem.time}</span>
                  </div>
                </div>
                <div className="cartbuttonmedia">
<button  className="booknowbutton" onClick={()=>handleClick(makeupitem)}>Book Now</button>
    </div>
                <div className="cartbutton">
<button className="booknowbutton" onClick={()=>onclickAbout(makeupitem)}>See More</button>
    </div>
              </div>
            </div>
             )}

            {/* 2  */}

           

            {/* 3 */}

           
            {/* 4 */}
            {/* <Link className="textdecoration" to="/CelibrityMakeup"> */}
             
          </div>
          <div className="secondboxofpopup">

         
          <div className="uu">
        <Makeuppopup trigger={buttonpopup} product={product} handleClick={handleClick} setTrigger={setbuttonpopup}/>


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
  );
};

export default BridalMakeup;
