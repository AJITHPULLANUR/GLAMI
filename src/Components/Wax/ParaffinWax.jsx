import React from "react";
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import { glami } from "../DataExport";
import { Link } from "react-router-dom";
import clock from "../Facial/circular-alarm-clock-tool.png";
import Footer2 from "../Footer/Footer2";

const ParaffinWax = () => {
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
            <Link className="textdecoration" to="/Waxing">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/beautiful-young-woman-with-white-tulip-her-attractive-perfect-legs-indoors_186202-4427.jpg?w=740&t=st=1690020813~exp=1690021413~hmac=01198831f754c24bcf4d7e49fecfac380199dde0abc822adc554ca9c0e8a47ba"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">WAXING</span>
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
                      <span>30 Min</span>
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
                  src="https://img.freepik.com/free-photo/young-woman-leg-hair-removal-session-using-honey-health-beauty-spa_662251-2115.jpg?w=740&t=st=1690021078~exp=1690021678~hmac=e5f6b3c32a5ec899d62d39c9b2868068df27944847a5fd8cb874855c35128e54"
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">PARAFFIN WAX</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹ 2000/- </span>
                        <span className="oldprice">₹ 2500/-</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">Limited Period Offer</span>
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

            {/* 3 */}
            {/* last work.................................... */}
            <Link className="textdecoration" to="/GelWax">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/woman-with-beautiful-body-using-cream-her-leg-white-background_186202-7250.jpg?w=740&t=st=1690021228~exp=1690021828~hmac=150858d6b4a45d60108a3f934d833505bc94b1731b98b13ea55291e36504bc44"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">GEL WAX</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1500/- </span>
                          <span className="oldprice">₹ 2000/-</span>
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
            {/* 4 */}
            <Link className="textdecoration" to="/BeesWax">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/premium-photo/young-woman-having-hair-removal-procedure-leg-with-sugaring-paste-salon_170532-2017.jpg?w=740"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">BEES WAX</span>
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
            <Link className="textdecoration" to="/ChocolateWax">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/premium-photo/young-woman-having-hair-removal-procedure-leg-with-sugaring-paste-salon_170532-2576.jpg?w=740"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">CHOCOLATE WAX</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 1000/- </span>
                          <span className="oldprice">₹ 1100/-</span>
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
            </Link>
          </div>

          <div className="detaildiv">
            <div className="itembox2">
              <div className="itemeach2">
                <div className="pointsdiv">
                  <span>
                    Preparation: The hands, feet, or any body part that will
                    undergo the treatment are first cleaned and dried to remove
                    any dirt or oils. The paraffin wax is melted in a
                    specialized paraffin wax heater or warmer. The wax is
                    usually heated to a comfortable temperature to avoid any
                    burns or discomfort.
                  </span>
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
  );
};

export default ParaffinWax;
