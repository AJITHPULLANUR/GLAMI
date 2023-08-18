import React from 'react'
import clock from './circular-alarm-clock-tool.png';
import { glami } from '../DataExport';
import logo from "../Logo and Icons/—Pngtree—salon logo_6942006.png";
import { Link } from "react-router-dom";
import accounts from "../Logo and Icons/girl.png";
import carts from "../Logo and Icons/bag.png";
import Footer2 from '../Footer/Footer2';

const AyurvedicFacial = () => {
  return (
    <div>
               <div className="facialfulldiv">
        <div className="navbarfirstbar">
          {/* logo */}

          <div className="logodiv">
            <Link className="textdecoration" to={"/"}>
              {" "}
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
            </div>
          ))}
        </div>
      </div>

     

<div className="facialmaindivsecond">

<div className="facialtotalbox">
    <div className="itembox">
    
{/* 1 */}
<Link className='textdecoration' to="/Facialmain"><div className="itemeach">
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://im.idiva.com/content/2022/Aug/1-Different-Types-Of-Facials-And-How-To-Pick-The-Right-One-For-Your-Skin-Type_630da9304cad0.jpg"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">CLASSICAL FACIAL</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 1140/- </span>
        <span className="oldprice">₹ 2000/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 860/</span></li></ul>
        
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

<Link className='textdecoration' to="/BrightFacial"><div className="itemeach">
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://img.freepik.com/free-photo/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure_343596-63.jpg?w=740&t=st=1689929293~exp=1689929893~hmac=ad92944580b24e26aa9242cc9b5964f617335ecd27e44444e7adc10f190a14f0"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">BRIGHTENING FACIAL</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 2000/- </span>
        <span className="oldprice">₹ 2500/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 500/</span></li></ul>
        
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

{/* 3 */}

<Link className='textdecoration' to="/FruitFacial" ><div className="itemeach">
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://img.freepik.com/free-photo/pretty-girl-anticipation-improving-condition-skin-face-puts-orange-eye-mask-white-background_197531-26796.jpg?w=740&t=st=1689929563~exp=1689930163~hmac=c876a7de2963cf7c5103b88e7bbb37d5ddf6f25ba433829424ddeef70acad459"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">FRUIT FACIAL</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 2540/- </span>
        <span className="oldprice">₹ 3000/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 460/</span></li></ul>
        
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
<Link className='textdecoration' to="/WineFacial"><div className="itemeach">
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://img.freepik.com/free-photo/beautiful-woman-with-golden-skin-cosmetic-touch-face-isolated-white-wall-beauty-skincare-treatment_231208-1522.jpg?w=740&t=st=1689929736~exp=1689930336~hmac=48325e5dfad7aea21347de46a473318741e400dde3e6e43cc0c227db98cb90d2"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">WINE FACIAL</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 1000/- </span>
        <span className="oldprice">₹ 1200/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 200/</span></li></ul>
        
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
{/* 5 */}
<div className="itemeachmain">
<div className="itempicture">
<img className="imageofitems" width="240px" height="240px" src="https://img.freepik.com/free-photo/funny-young-woman-with-green-cosmetic-mask-her-face-is-resting-while-lying-spa-salon-top-view_169016-15361.jpg?w=740&t=st=1689929848~exp=1689930448~hmac=9b4cd96c94ce0c208a3c67dc4792a3164f4a88ea44b0e7538b42b29ec8096700"alt="" />
</div>
<div className="itemdetails">
    <div className="nameandrate">
   <div className="nameofitem"><span className="itemhead">AYURVEDIC FACIAL</span></div> 
    <div className="price">
        
    <ul> <li><span className="originalprice">₹ 4000/- </span>
        <span className="oldprice">₹ 5000/-</span></li>
       <li> <span className="offertext">Limited Period Offer</span></li>
       <li> <span className="offertext">Save Upto ₹ 1000/</span></li></ul>
        
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


    </div>
    














































    <div className="detaildiv">
    <div className="itembox2">
    <div className="itemeach2">
      <div className="pointsdiv">
        <span>Consultation: Before the facial begins, an Ayurvedic consultation to determine the individual's Dosha (Vata, Pitta, or Kapha) and assess any specific skin concerns or imbalances.

Cleansing: The facial starts and prepare the skin for further treatments.

Exfoliation: Natural herbal powders or pastes may be used to exfoliate the skin gently, </span>
        
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

export default AyurvedicFacial