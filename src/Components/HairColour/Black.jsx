import React from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';

const Black = () => {
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
            <Link className="textdecoration" to="/White" >

            <div className="itemeach">
              <div className="itempicture">
                <img
                  className="imageofitems"
                  width="240px"
                  height="240px"
                  src="https://media.allure.com/photos/5c267c431c0f232cc2c74294/1:1/w_1079,h_1079,c_limit/snow%20hair.JPG"
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">WHITE</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹ 2800/- </span>
                        <span className="oldprice">₹ 3000/-</span>
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

            <Link className="textdecoration" to="/Red" >
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/shot-positive-lady-with-blue-eyes-red-curls-pink-space-girl-bright-headdress-red-top-looking-camera_197531-15372.jpg?w=740&t=st=1690135920~exp=1690136520~hmac=9929d8c89251916963d196961c6a80075b93a0a83eb65c0e3ca9ac1f89b5992a"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">RED</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 2500/- </span>
                          <span className="oldprice">₹ 3000/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Limited Period Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 500/</span>
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

            {/* 3 */}
 {/* last work.................................... */}
                <div className="itemeachmain"> 
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-smiling-woman-with-long-brown-hair-red-dress_186202-6493.jpg?w=740&t=st=1690136068~exp=1690136668~hmac=05ea6a3d06e01e8f360be484288181a0c6d167255f6f20b4f1c27e6ba4bdb037"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">BLACK</span></div> 
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
            {/* 4 */}
            <Link className="textdecoration" to="/Green">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://glowsly.com/wp-content/uploads/2020/02/green-hair-color-shades-green-hair-dye-tips26.jpg"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">GREEN</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1400/- </span>
                          <span className="oldprice">₹ 2000/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                           limited Period  Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 600/</span>
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
            <Link className="textdecoration" to="/Brown">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://i0.wp.com/www.hadviser.com/wp-content/uploads/2020/04/3-hairstyle-with-caramel-highlights-B6vNM4Qg7oc.jpg?resize=1080%2C1350&ssl=1"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">BROWN</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 2000/- </span>
                          <span className="oldprice">₹ 2200/-</span>
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
                  Black hair is a naturally occurring hair color found in people of various ethnic backgrounds, including individuals of African, Asian, and European descent.

Versatility: Black hair serves as a versatile base for various hair color transformations. Individuals with black hair       </span>
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

export default Black