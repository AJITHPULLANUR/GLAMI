import React from 'react'
import fb from '../Footer2/facebook.png';
import insta from '../Footer2/instagram (1).png';
import youtube from '../Footer2/youtube (1).png';
import map from '../Footer2/google-maps.png';
import logo from '../Logo and Icons/—Pngtree—salon logo_6942006.png';
import { Link } from 'react-router-dom';


const Footer2 = () => {
  return (
    <div className='footer2'>
         <div className="footerdiv">
    <div className="mainfooter">
      <Link to={"/"} className="textdecoration"><img className='footer2image' width="120px" height="120px" src={logo} alt="" /></Link>
      <div className="makeovertext1">

      <Link to={"/"} className="textdecoration"><span className="makeovertext">GLAMI MAKEOVER</span></Link>
      </div>

      <div className="footersocial">
        <a href="https://www.facebook.com/login/"><img className="fb" width="40px"height="40px" src={fb} alt="" /></a>
        <a href="https://twitter.com/i/flow/login?lang=en"><img className="insta"  width="40px"height="40px" src={insta} alt="" /></a>
        <a href="https://www.youtube.com/"><img className="utub" width="40px"height="40px" src={youtube} alt="" /></a>
        {/* <a href="https://in.pinterest.com/"><img width="40px"height="40px" src={pintrest} alt="" /></a> */}
        <a href="https://www.google.com/maps/place/Manjeri,+Kerala/@11.1176164,76.1120541,14z/data=!4m6!3m5!1s0x3ba6367a09827289:0xa5bab8b1f3018ca4!8m2!3d11.1202668!4d76.1198972!16zL20vMDhoYjh4?entry=ttu"><img className="maap"  width="40px"height="40px" src={map} alt="" /></a>


      </div>

    </div>
    <span className="copyright">Copyright © 2023 TermsFeed®. All rights reserved.</span>
  </div>

    </div>
  )
}

export default Footer2