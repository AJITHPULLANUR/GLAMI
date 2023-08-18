import React, { useState } from "react";
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from "../DataExport";
import { Link } from "react-router-dom";
import clock from "./circular-alarm-clock-tool.png";
import { facial } from "../DataExport";
import BrightFacial from "./BrightFacial";
import Footer2 from "../Footer/Footer2";
import Facialpopup from "./Facialpopup";

const Facialmain = ({ size, handleClick,setShow }) => {
  const [buttonpopup, setbuttonpopup] = useState(false);
  const [product, setproduct] = useState();
  const onclickAbout = (facialitem) => {
    setbuttonpopup(true);
    setproduct(facialitem);
  };
  const makeover =facial.filter((facialitem) =>facialitem.cat==="face")
  return (
    <div>
     

      <div className="facialmaindivsecond">
        <div className="facialtotalbox">
          <div className="itembox">
            {/* 1 */}
            {makeover.map((facialitem) => (
              <div className="itemeachmain" >
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src={facialitem.img}
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">{facialitem.title}</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹
                            {facialitem.originalprice}{" "}
                          </span>
                          <span className="oldprice">
                            {facialitem.oldprice}
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            {facialitem.offertext}
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">{facialitem.save}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="time">
                      <img
                        width="20px"
                        height="20px"
                        src={facialitem.png}
                        alt=""
                      />
                      <span>{facialitem.time}</span>
                    </div>
                  </div>
                  <div className="cartbuttonmedia">
<button  className="booknowbutton" onClick={()=>handleClick(facialitem)}>Book Now</button>
    </div>
                  <div className="cartbutton">
                    <button
                      className="booknowbutton"
                      onClick={() => onclickAbout(facialitem)}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* 2  */}
          </div>

          <div className="secondboxofpopup">
            <div className="uu">
              <Facialpopup
                handleClick={handleClick}
                trigger={buttonpopup}
                product={product}
                setTrigger={setbuttonpopup}
               
              />
            </div>
          </div>
          {/* <div className="detaildiv">
    <div className="itembox2">
    <div className="itemeach2">
    <div className="pointsdiv"> */}

          {/* <span>Well-Defined Cheekbones: High and well-defined cheekbones can contribute to a classically appealing facial structure.

 Eyes that are slightly elongated and shaped like almonds are often associated with classical beauty.

Full Lips: Lips that are naturally full and  classical beauty standards.

Smooth Skin: Clear, smooth, and healthy-looking </span> */}
          {/* <li><span>Classically attractive faces often exhibit balanced and harmonious features</span></li>
        <li><span>Lips that are neither too thin nor too full are often considered attractive</span></li>
        <li><span>Bright and clear eyes can contribute to the overall attractiveness of a face</span></li>
          <li><span>Clear and smooth skin is generally associated with youth and beauty</span></li> */}
          {/* </div>
      <div className="drop">
        <div class="accordion" id="accordionExample">


<div id="dropwidth" class="accordion-item">
  <h2  class="accordion-header" id="headingThree">
    <span id="buttonofdrop" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     
    </span>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div id="droplist" class="accordion-body">
      <div className="dropdownlistdrop">
        <div className="droppoints">
          
    <span className="dropspan"></span>
        </div>
        <div className="cartbuttondrop">
        <input className="booknowbutton2" type="button" value="BOOK NOW" />

    </div>
    </div>

    </div>
  </div>
</div>
</div>

      </div>

   
       


      
      
         
           </div>








      </div>

      
  
    </div> */}
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Facialmain;
