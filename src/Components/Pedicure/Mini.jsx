import React from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';

const Mini = () => {
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
            <Link className="textdecoration" to="/Gel">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/closeup-photo-female-feet-spa-salon-pedicure-manicure-procedure-soft-focus-image_186202-6443.jpg?w=740&t=st=1690175494~exp=1690176094~hmac=9e6876ea18b6f656934c636f21dee15dec9af45f4405b9f30eb7c9d228d5dc7c"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">GEL PREDICURE</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1000/- </span>
                          <span className="oldprice">₹ 1500/-</span>
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

            {/* 2  */}

            <Link className="textdecoration" to="/Water">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://static.wixstatic.com/media/d7f24b_ff8380d8fd0d48e5816a721bf7384cd9~mv2.jpeg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7f24b_ff8380d8fd0d48e5816a721bf7384cd9~mv2.jpeg"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">WATERLESS PREDICURE</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1000/- </span>
                          <span className="oldprice">₹ 1300/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Limited Period Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 300/</span>
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
            <Link className="textdecoration" to="/Spa">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://facesspa.com/wp-content/uploads/2018/07/shutterstock_572592661.jpg"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">SPA PREDICURE</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1500/- </span>
                          <span className="oldprice">₹ 1800/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Limited Period Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 300/</span>
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
            {/* 4 */}
              <div className="itemeachmain">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://www.inertiadayspa.com.au/static/ecommerce/136/136435/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/manicure_and_pedicure_teen_pamper_party_1/www.inertiadayspa.com.au-Option-3-Teen-Party-(8-girls)-32.jpg"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">MINI PREDICURE</span>
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
                            limited Period Offer
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

            {/* 5 */}
            <Link className="textdecoration" to="/Hot">
<div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/beautiful-legs-different-spa-items_144627-28920.jpg?w=740&t=st=1690176195~exp=1690176795~hmac=70f26498d7e4b33eea38f9d29a403ac99c5b255b3ff171674d05b33534942718"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">HOT STONE PREDICURE</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 3000/- </span>
                          <span className="oldprice">₹ 3500/-</span>
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
                      <span>120 Min</span>
                    </div>
                  </div>
                  {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
                </div>
              </div></Link>
          </div>

          <div className="detaildiv">
            <div className="itembox2">
              <div className="itemeach2">
                <div className="pointsdiv">
                  <span>
                  Some mini pedicures may include a brief foot soak in warm water to soften the skin and nails.

Nail Care: The nails are trimmed, shaped, and buffed, and cuticles are pushed back or gently removed.                  </span>
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

export default Mini