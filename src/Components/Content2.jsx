import React from "react";
import wax from "./Categories/wax.jpg";
import { Link } from "react-router-dom";
import fruit from "./Categories/fru.jpg";
import thread from "./Categories/20230718203028_[fpdl.in]_eyebrow-correction-with-white-thread_144962-3309_normal.jpg";
import makeup from "./Categories/20230718202944_[fpdl.in]_make-up-artist-applying-professional-make-up-beautiful-young-woman_473712-3927_normal.jpg";

const Content2 = () => {
  return (
    <div>
      <div className="secondbody">
        <div className="bookingtextdiv">
          <span id="animation3" className="bookingtext">
            Book Online or Visit Our Glami
          </span>
        </div>

        <div className="secondsubmain">
          {/* 1 */}
          <Link className="textdecoration image-container" to="/Facialmain">
            {" "}
            <div >
              <div class="fixed-text1">FACIAL</div>
              <img
                className="categoryimages"
                width="92%"
                height="360px"
                src={fruit}
                alt=""
              />
            </div>
          </Link>

          {/* 2 */}
<div className="secondsub2">
<Link className="textdecoration image-container2" to="/BridalMakeup">

            <div >
              <div class="fixed-text2">MAKEUP</div>
              <img
                className="categoryimages"
                width="92%"
                height="180px"
                src={makeup}
                alt=""
              />
            </div>
            </Link>

            {/* 3 */}
            <Link className="textdecoration image-container3 " to="/Waxing">
            <div >
              <div class="fixed-text3">WAX</div>
              <img
                className="categoryimages"
                width="92%"
                height="180px"
                src={wax}
                alt=""
              />
            </div></Link>
          </div>

          {/* 4 */}
          <Link className="textdecoration image-container4 " to="/MetalicThreading">
          <div >
            <img
              className="categoryimages"
              width="92%"
              height="360px"
              src={thread}
              alt=""
            />
            <div class="fixed-text4">THREADING</div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content2;
