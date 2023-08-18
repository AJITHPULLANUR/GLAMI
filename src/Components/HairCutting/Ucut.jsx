import React from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';

const Ucut = () => {
  return (
    <div>
        <div className="facialfulldiv">
        <div className="navbarfirstbar">
          {/* logo */}

          <div className="logodiv">
            <Link className="textdecoration" to={"/"}>
              <div className="logotext">
                <img width="100px" height="100px" src={logo} alt="" />
                <span className="name">GLAMI MAKEOVER</span>
              </div>
            </Link>
          </div>

          {/* input */}
          <div className="navbarsearchinput">
            <input
              className="inputofsearch"
              type="text"
              placeholder="Search everything at Glami"
            />
          </div>

          {/* account */}
          <div className="accountdiv">
            <div className="accounts">
              <img className="cartitem" src={accounts} alt="" />
              <span id="animation3">Profile</span>
            </div>
            <div className="accounts">
              <img className="cartitem" src={carts} alt="" />
              <span id="animation3">Cart</span>
            </div>
          </div>
        </div>

        <div className="secondpage_categories">
          {glami.map((item) => (
            <div key={item.id}>
              <Link className="textdecoration" to={item.Linkto}>
                {" "}
                <div className="secondpage_catego">
                  <img
                    className="imageradius"
                    width="70px"
                    height="70px"
                    src={item.img}
                    alt=""
                  />
                  <span>{item.text}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="facialmaindivsecond">
        <div className="facialtotalbox">
          <div className="itembox">
            {/* 1 */}
            <Link className="textdecoration" to="/Haircut" >
<div className="itemeach">
              <div className="itempicture">
                <img
                  className="imageofitems"
                  width="240px"
                  height="240px"
                  src="https://content.latest-hairstyles.com/wp-content/uploads/v-cut-choppy-hair.jpg"
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">V CUT</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹ 800/- </span>
                        <span className="oldprice">₹ 1000/-</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">Limited Period Offer</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">Save Upto ₹ 200/</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time">
                    <img width="20px" height="20px" src={clock} alt="" />
                    <span>60 Min</span>
                  </div>
                </div>
                {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
              </div>
            </div>
            </Link>

            {/* 2  */}

              <div className="itemeachmain">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://3.imimg.com/data3/RX/CR/MY-9456536/1-250x250.jpg"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">U CUT</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 400/- </span>
                          <span className="oldprice">₹ 500/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Limited Period Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 100/</span>
                        </li>
                      </ul>
                    </div>
                    <div className="time">
                      <img width="20px" height="20px" src={clock} alt="" />
                      <span>60 Min</span>
                    </div>
                  </div>
                  {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
                </div>
              </div>

            {/* 3 */}
 {/* last work.................................... */}
            <Link className='textdecoration' to="/LayerCut" ><div className="itemeach"> 
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://5.imimg.com/data5/SELLER/Default/2021/12/TD/JL/GZ/132168821/01-10-2019-latest-haircut-for-girls-long-with-layers-3.png"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">LAYER CUT</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 500/- </span>
        <span className="oldprice">₹ 800/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 300/</span></li></ul>
        
    </div>
    <div className="time">
        <img width="20px" height="20px" src={clock} alt="" />
        <span>60 Min</span>
    </div>
    </div>
    {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}

   

</div>


</div>
</Link>
            {/* 4 */}
            <Link className="textdecoration" to="/StepCut">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://rukminim1.flixcart.com/image/850/1000/kf75fgw0/hair-extension/v/s/d/natural-looking-step-cutting-clutcher-1-d-0082-clutcher-hair-original-imafvpbnchfthbec.jpeg?q=90"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">STEP CUT</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 800/- </span>
                          <span className="oldprice">₹ 1000/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                           limited Period  Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 200/</span>
                        </li>
                      </ul>
                    </div>
                    <div className="time">
                      <img width="20px" height="20px" src={clock} alt="" />
                      <span>60 Min</span>
                    </div>
                  </div>
                  {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
                </div>
              </div>
            </Link>

            {/* 5 */}
            <Link className="textdecoration" to="/ChineseCut">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://www.sishair.com/wp-content/uploads/2017/04/Chinese-Bangs.jpg"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">CHINESE CUT</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1000/- </span>
                          <span className="oldprice">₹ 1200/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Limited Period Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 200/</span>
                        </li>
                      </ul>
                    </div>
                    <div className="time">
                      <img width="20px" height="20px" src={clock} alt="" />
                      <span>120 Min</span>
                    </div>
                  </div>
                  {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
                </div>
              </div>
            </Link>
          </div>

          <div className="detaildiv">
            <div className="itembox2">
              <div className="itemeach2">
                <div className="pointsdiv">
                  <span>
                  Uniform Length: The hair is cut to a consistent length across the bottom, creating a clean and even U shape.

Volume and Fullness: U cut hairstyles can add volume and fullness to the hair, particularly for individuals with thick or coarse hair                  </span>
                  {/* <li><span>Classically attractive faces often exhibit balanced and harmonious features</span></li>
        <li><span>Lips that are neither too thin nor too full are often considered attractive</span></li>
        <li><span>Bright and clear eyes can contribute to the overall attractiveness of a face</span></li>
          <li><span>Clear and smooth skin is generally associated with youth and beauty</span></li> */}
                </div>
                <div className="drop">
                  <div class="accordion" id="accordionExample">
                    <div id="dropwidth" class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <span
                          id="buttonofdrop"
                          class="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          See More
                        </span>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div id="droplist" class="accordion-body">
                          <div className="dropdownlistdrop">
                            <div className="droppoints">
                              <span className="dropspan">
                                BOOK BEFORE 1 WEEK
                              </span>
                            </div>
                            <div className="cartbuttondrop">
                              <input
                                className="booknowbutton2"
                                type="button"
                                value="BOOK NOW"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default Ucut