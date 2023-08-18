import React from 'react'
import phone from './Logo and Icons/telephone.png';
import companylogo from './Logo and Icons/—Pngtree—salon logo_6942006.png';
import insta from './Logo and Icons/instagram (1).png';
import fb from './Logo and Icons/facebook (2).png';
import youtube from './Logo and Icons/youtube (1).png';
import pintrest from './Logo and Icons/pinterest.png';




const Footer = () => {
  return (
    <div>
        <div className='footerfull'>

            <div className='footer1'>
                <div className='detailfooter'>
                    <div className='imageandtextfooter'>
                        <span className='footernumber'>For Enquiry :</span>
                        <img width="20px" height="20px" src={phone} alt="" />
                        <span className='footernumber'>7070070707</span>

                    </div>

                    <div className='logosdiv'>
                        <img className='footerlastlogo' width="160px" height="160px" src={companylogo} alt="" />

                    </div>

                    <div className='socialfooter'>
                        <div className='socialsdiv'>
                        <span className='footernumber'>Follow Us :</span><br />
                        <a href="https://www.instagram.com/"><img className='socios' width="35px" height="35px" src={insta} alt="" /></a>
                        <a href="https://www.facebook.com/login/"><img className='socios' width="35px" height="35px" src={fb} alt="" /></a>
                       <a href="https://www.youtube.com/"> <img className='socios' width="35px" height="35px" src={youtube} alt="" /></a>
                        <a href="https://in.pinterest.com/"><img className='socios' width="35px" height="35px" src={pintrest} alt="" /></a>
                        </div>

                    </div>

                </div>
                <span className='glamifoot'>© 2023 Glami Makeover. All Rights Reserved.</span>

            </div>

        </div>
    </div>
  )
}

export default Footer