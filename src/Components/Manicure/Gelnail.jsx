import React from 'react'
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from '../DataExport';
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Footer/Footer2';

const Gelnail = () => {
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
            <Link className="textdecoration" to="/Shellac">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/nail-hygiene-care-flat-lay_23-2148766575.jpg?w=740&t=st=1690184807~exp=1690185407~hmac=83dc54e9c425df529f268bf0fdc528df69919080120216988d809d99a90eabfa"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">SHELLAC MANICURE</span>
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

            <Link className="textdecoration" to="/Dip">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/premium-photo/process-separating-saffron-strands-from-rest-flower_347372-232.jpg?w=740"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">DIP POWDER MANICURE</span>
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
            <Link className="textdecoration" to="/Gelman">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-french-manicure-art-design_186202-5311.jpg?w=740&t=st=1690185359~exp=1690185959~hmac=530a4f33397e9f9b514b898164cf9f6c18c74dc3fa1dd0b764405436d923bdce"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">GEL MANICURE</span>
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
            <Link className="textdecoration" to="/Paraffin">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/beautiful-women-hands-with-black-manicure-after-spa-procedures-spa-treatment-concept_186202-7780.jpg?w=740&t=st=1690185431~exp=1690186031~hmac=844aa107f0093cbb0fcad961138b04d606feeaef569bebf4259054d9a42d62bc"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">PARAFFIN MANICURE</span>
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
            </Link>

            {/* 5 */}
<div className="itemeachmain">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/premium-photo/nail-design-shiny-matte-nail-polish-with-smooth-curves_364573-53.jpg?w=740"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">GEL NAILS MANICURE</span>
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
              </div>
          </div>

          <div className="detaildiv">
            <div className="itembox2">
              <div className="itemeach2">
                <div className="pointsdiv">
                  <span>
                  The nails are cleaned, shaped, and buffed by a professional nail technician to prepare them for the gel polish application.

Gel Polish Application: The gel nail polish is applied in multiple thin layers, including a base coat, colored gel polish,                   </span>
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

export default Gelnail