import React from "react";

const Predicurepopup = ({ trigger, setTrigger, product, handleClick }) => {
  return trigger ? (
    <div>
      <div className="detaildiv">
        <div className="itembox2">
          <div className="itemeach2">
            <div className="pointsdiv">
              <span>{product.title}</span>
              <span>{product.detail} </span>
            </div>
            <div className="droppopup">
              <div
                className="bootpopup"
                class="accordion"
                id="accordionExample"
              >
                <div id="dropwidthpopup" class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <span
                      id="buttonofdroppopup"
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
                    <div id="droplistpopup" class="accordion-body">
                      <div className="dropdownlistdrop">
                        <div className="droppointspopup">
                          <button
                            className="closebutton"
                            onClick={() => setTrigger(false)}
                          >
                            close
                          </button>

                          <h4 className="dropspan">BOOK BEFORE 1 WEEK</h4>
                          <h5 className="colorofprice">
                            ₹{product.originalprice}
                          </h5>
                        </div>
                        <div className="cartbuttondrop">
                          <input
                            className="booknowbutton2"
                            type="button"
                            onClick={() => handleClick(product)}
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
  ) : (
    ""
  );
};

export default Predicurepopup;
