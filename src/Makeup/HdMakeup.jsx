import React from 'react'
import logo from "../Components/Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "../Components/Logo and Icons/girl.png";
import carts from "../Components/Logo and Icons/bag.png";
import { glami } from "../Components/DataExport";
import { Link } from "react-router-dom";
import clock from "../Components/Facial/circular-alarm-clock-tool.png";
import Footer2 from '../Components/Footer/Footer2';

const HdMakeup = () => {
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
              <Link className="textdecoration " to={item.Linkto}><div className="secondpage_catego">
                <img
                  className="imageradius"
                  width="70px"
                  height="70px"
                  src={item.img}
                  alt=""
                />
                <span>{item.text}</span>
              </div></Link>
            </div>
          ))}
        </div>
      </div>

     

<div className="facialmaindivsecond">

<div className="facialtotalbox">
    <div className="itembox">
    
{/* 1 */}
<Link className='textdecoration ' to="/BridalMakeup">
<div className="itemeach">
              <div className="itempicture">
                <img
                  className="imageofitems"
                  width="240px"
                  height="240px"
                  src="https://img.freepik.com/premium-photo/young-beautiful-bride-with-luxurious-curls-wedding-hairstyle-with-tiara_125374-959.jpg?w=740"
                  alt=""
                />
              </div>
              <div className="itemdetails">
                <div className="nameandrate">
                  <div className="nameofitem">
                    <span className="itemhead">BRIDAL MAKEUP</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹ 15000/- </span>
                        <span className="oldprice">₹ 18000/-</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">Limited Period Offer</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">Save Upto ₹ 3000/</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time">
                    <img width="20px" height="20px" src={clock} alt="" />
                    <span>2 DAYS</span>
                  </div>
                </div>
                {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
              </div>
            </div></Link>

      
      {/* 2  */}

              <div className="itemeachmain">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/make-up-artist-applying-liquid-eyeliner-with-brush_1150-11740.jpg?w=740&t=st=1690014275~exp=1690014875~hmac=34789c18d55f867c452596017068ade5104142fc5d7980d1767c0eea7b09e927"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">HD MAKEUP</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 4000/- </span>
                          <span className="oldprice">₹ 4500/-</span>
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
                      <span>150 Min</span>
                    </div>
                  </div>
                  {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}
                </div>
              </div>

{/* 3 */}

<Link className='textdecoration' to="/HewyMakeup" ><div className="itemeach">
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://img.freepik.com/free-photo/portrait-beautiful-woman-with-make-up-brushes-near-attractive-face-adult-girll-posing-white-space_186202-4026.jpg?w=740&t=st=1690017650~exp=1690018250~hmac=3c494d805b79515c91260f328e408bf2e30a39d3907dfcbe7011362ecdc6f9ae"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">HEWY MAKEUP</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 1500/- </span>
        <span className="oldprice">₹ 2000/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 500/</span></li></ul>
        
    </div>
    <div className="time">
        <img width="20px" height="20px" src={clock} alt="" />
        <span>90 Min</span>
    </div>
    </div>
    {/* <div className="cartbutton">
        <input className="booknowbutton" type="button" value="BOOK NOW" />

    </div> */}

   

</div>


</div>
</Link>
{/* 4 */}
<Link className="textdecoration" to="/CelibrityMakeup">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair-red-dress_186202-6496.jpg?w=740&t=st=1690018185~exp=1690018785~hmac=dbc70d74cedd23d601ff53734dc5ca54777e279c05830593fa1a059c31531e42"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">CELIBRITY MAKEUP</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 8000/- </span>
                          <span className="oldprice">₹ 10000/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Special  Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 2000/</span>
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

            {/* 5 */}
            <Link className="textdecoration" to="/PermanentMakeup">
              <div className="itemeach">
                <div className="itempicture">
                  <img
                    className="imageofitems"
                    width="240px"
                    height="240px"
                    src="https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-curly-hair-posing-studio-with-red-bright-natural-lips_158538-23871.jpg?w=740&t=st=1690018366~exp=1690018966~hmac=ac6c64bb5cb0ada80e0d3e7f189aca2c4f734121b2c55d39be4c43d232d7f116"
                    alt=""
                  />
                </div>
                <div className="itemdetails">
                  <div className="nameandrate">
                    <div className="nameofitem">
                      <span className="itemhead">PERMANENT MAKEUP</span>
                    </div>
                    <div className="price">
                      <ul>
                        {" "}
                        <li>
                          <span className="originalprice">₹ 10000/- </span>
                          <span className="oldprice">₹ 11000/-</span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">
                            Limited Period Offer
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span className="offertext">Save Upto ₹ 1000/</span>
                        </li>
                      </ul>
                    </div>
                    <div className="time">
                      <img width="20px" height="20px" src={clock} alt="" />
                      <span>180 Min</span>
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
        <span>Lightweight Formulation: HD makeup products are typically formulated to be lightweight, allowing the skin to breathe and preventing the makeup from feeling heavy or cakey.

Fine Pigments: HD makeup products that help create a smooth and even finish on the skin, minimizing the appearance of pores and fine lines. </span>
        {/* <li><span>Classically attractive faces often exhibit balanced and harmonious features</span></li>
        <li><span>Lips that are neither too thin nor too full are often considered attractive</span></li>
        <li><span>Bright and clear eyes can contribute to the overall attractiveness of a face</span></li>
          <li><span>Clear and smooth skin is generally associated with youth and beauty</span></li> */}
      </div>
      <div className="drop">
        <div class="accordion" id="accordionExample">


<div id="dropwidth" class="accordion-item">
  <h2  class="accordion-header" id="headingThree">
    <span id="buttonofdrop" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     See More
    </span>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div id="droplist" class="accordion-body">
      <div className="dropdownlistdrop">
        <div className="droppoints">
          
    <span className="dropspan">BOOK BEFORE 1 WEEK</span>
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

      
  
    </div>

</div>

</div>
<Footer2/>
    </div>
  )
}

export default HdMakeup