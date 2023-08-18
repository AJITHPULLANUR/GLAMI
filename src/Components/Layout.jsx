import React, { useState, useEffect } from "react";
import logo from "./Logo and Icons/—Pngtree—salon logo_6942006.png";
import accounts from "./Logo and Icons/girl.png";
import carts from "./Logo and Icons/bag.png";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ size, setShow }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const [fields, setFields] = useState({
    emailid: "",

    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [fields]);

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(fields);
      setFields({
        emailid: "",

        password: "",
      });
      alert("Form submitted");
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    } else {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    } else if (
      !fields["password"].match(
        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
      )
    ) {
      formIsValid = false;
      errors["password"] = "*Please enter secure and strong password.";
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <div>
      <div className="navbarfull">
        <div className="navbarfirstbar">
          {/* logo */}

          <Link className="textdecoration " to="/">
            {" "}
            <div className="logodiv">
              <div className="logotext">
                <img
                  className="logoimage"
                  width="100px"
                  height="100px"
                  src={logo}
                  alt=""
                />
                <span className="name">GLAMI MAKEOVER</span>
              </div>
            </div>
          </Link>

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
            <div onClick={showModal} className="accounts">
              <img className="cartitem" src={accounts} alt="" />
              <span id="animation3">Profile</span>
            </div>
            <Link className="textdecoration" to="/Cart">
              <div onClick={() => setShow(false)} className="accounts">
                <div>
                  <img className="cartitem" src={carts} alt="" />
                  <span className="sizespan">{size}</span>
                </div>
                <span id="animation3">Cart</span>
              </div>{" "}
            </Link>
          </div>
        </div>

        {/* category */}

        <div className="navbarsecondbar">
          <div className="categorybar">
            <span className="catehead">Categories</span>
          </div>

          {/* 1 */}
          <div className="hoverbar">
            <div className="dropdowndiv">
              <Link className="textdecoration" to="/Facialmain">
                {" "}
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Facial
                  </span>
                </div>
              </Link>
              <div className="dropdownlist">
                <span id="animation2">Classical Facial</span>
                <span id="animation2">Brightening Facial</span>
                <span id="animation2">Fruit Facial</span>
                <span id="animation2">Wine Facial</span>
                <span id="animation2">Ayurvedic Facial</span>
              </div>
            </div>

            {/* 2 */}
            <div className="dropdowndiv">
              <Link className="textdecoration" to="/BridalMakeup">
                {" "}
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Makeup
                  </span>
                </div>
              </Link>
              <div className="dropdownlist">
                <Link className="textdecoration" to="/BridalMakeup">
                  <span id="animation2">Bridal Makeup</span>
                </Link>
                <Link className="textdecoration" to="/HdMakeup">
                  <span id="animation2">HD Makeup</span>
                </Link>
                <Link className="textdecoration" to="/HewyMakeup">
                  <span id="animation2">Hewy Makeup</span>
                </Link>
                <Link className="textdecoration" to="/CelibrityMakeup">
                  <span id="animation2">Celibrity Makeup</span>
                </Link>
                <Link className="textdecoration" to="/PermanentMakeup">
                  <span id="animation2">Permanent Makeup</span>
                </Link>
              </div>
            </div>

            {/* 3 */}

            <div className="dropdowndiv">
              <Link className="textdecoration" to="/Waxing">
                {" "}
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Wax
                  </span>
                </div>
              </Link>
              <div className="dropdownlist">
                <Link className="textdecoration" to="/Waxing">
                  <span id="animation2">Waxing</span>
                </Link>
                <Link className="textdecoration" to="/ParaffinWax">
                  {" "}
                  <span id="animation2">Paraffin Wax</span>
                </Link>
                <Link className="textdecoration" to="/GelWax">
                  {" "}
                  <span id="animation2">Gel Wax</span>
                </Link>
                <Link className="textdecoration" to="/BeesWax">
                  <span id="animation2">Bees Wax</span>
                </Link>
                <Link className="textdecoration" to="/ChocolateWax">
                  <span id="animation2">Chocolate Wax</span>
                </Link>
              </div>
            </div>

            {/* 4 */}

            <div className="dropdowndiv">
              <Link className="textdecoration" to="/MetalicThreading">
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Threading
                  </span>
                </div>
              </Link>
              <div className="dropdownlist">
                <Link className="textdecoration" to="/MetalicThreading">
                  <span id="animation2">Metalic Thread</span>
                </Link>
                <Link className="textdecoration" to="/ButtressThreading">
                  {" "}
                  <span id="animation2">Buttress Thread</span>
                </Link>
                <Link className="textdecoration" to="/PolysterThreading">
                  <span id="animation2">Polyster Thread</span>
                </Link>
                <Link className="textdecoration" to="/SqaureThreading">
                  <span id="animation2">Square Thread</span>
                </Link>
                <Link className="textdecoration" to="/BritishThreading">
                  {" "}
                  <span id="animation2">British Standard Thread</span>
                </Link>
              </div>
            </div>

            {/* 5 */}

            <div className="dropdowndiv">
              <Link className="textdecoration" to="/Haircut">
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    {" "}
                    Hair Cutting
                  </span>
                </div>
              </Link>
              <div className="dropdownlist">
                <Link className="textdecoration" to="/Haircut">
                  {" "}
                  <span id="animation2">V Cut</span>
                </Link>
                <Link className="textdecoration" to="/Ucut">
                  <span id="animation2">U Cut</span>
                </Link>
                <Link className="textdecoration" to="/LayerCut">
                  <span id="animation2">Layer Cut</span>
                </Link>
                <Link className="textdecoration" to="/StepCut">
                  <span id="animation2">Step Cut</span>
                </Link>
                <Link className="textdecoration" to="/ChineseCut">
                  {" "}
                  <span id="animation2">Chinese Cut</span>
                </Link>
              </div>
            </div>

            {/* 6 */}
            <div className="dropdowndiv">
              <Link className="textdecoration" to="/White">
                {" "}
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Hair Coloring
                  </span>
                </div>
              </Link>
              <div className="dropdownlist">
                <Link className="textdecoration" to="/White">
                  <span id="animation2">White</span>
                </Link>
                <Link className="textdecoration" to="/Red">
                  <span id="animation2">Red</span>
                </Link>
                <Link className="textdecoration" to="/Black">
                  {" "}
                  <span id="animation2">Black</span>
                </Link>
                <Link className="textdecoration" to="/Green">
                  {" "}
                  <span id="animation2">Green</span>
                </Link>
                <Link className="textdecoration" to="/Brown">
                  <span id="animation2">Brown</span>
                </Link>
              </div>
            </div>

            {/* 7 */}
            <div className="dropdowndiv">
              <Link className="textdecoration" to="/Gel">
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Predicure
                  </span>
                </div>
              </Link>
              <div className="dropdownlist2">
                <Link className="textdecoration" to="/Gel">
                  {" "}
                  <span id="animation2">Gel Predicure</span>
                </Link>
                <Link className="textdecoration" to="/Water">
                  {" "}
                  <span id="animation2">Waterless Predicure</span>
                </Link>
                <Link className="textdecoration" to="/Spa">
                  <span id="animation2">Spa Predicure</span>
                </Link>
                <Link className="textdecoration" to="/Mini">
                  <span id="animation2">Mini Predicure</span>
                </Link>
                <Link className="textdecoration" to="/Hot">
                  {" "}
                  <span id="animation2">Hot Stone Pedicure</span>
                </Link>
              </div>
            </div>

            {/* 8 */}
            <div className="dropdowndiv">
              <Link className="textdecoration" to="/Shellac">
                {" "}
                <div className="dropbutton">
                  <span className="taghovernav" id="animation">
                    Manicure{" "}
                  </span>
                </div>
              </Link>
              <div className="dropdownlist2">
                <Link className="textdecoration" to="/Shellac">
                  <span id="animation2">Shellac Manicure </span>
                </Link>
                <Link className="textdecoration" to="/Dip">
                  {" "}
                  <span id="animation2">Dip Powder Manicure </span>
                </Link>
                <Link className="textdecoration" to="/Gelman">
                  {" "}
                  <span id="animation2">Gel Manicure </span>
                </Link>
                <Link className="textdecoration" to="/Paraffin">
                  <span id="animation2">Paraffin Manicure </span>
                </Link>
                <Link className="textdecoration" to="/Gelnail">
                  {" "}
                  <span id="animation2">Gel nails Manicure </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <div className="mailid">
                <input
                  className="mail"
                  type="text"
                  name="emailid"
                  placeholder="Enter your E-mail"
                  value={fields.emailid}
                  onChange={handleChange}
                />
                <span className="errorMsg">{errors.emailid}</span>
              </div>
              <div className="passworddiv">
                <input
                  className="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={fields.password}
                  onChange={handleChange}
                />
                <span className="errorMsg">{errors.password}</span>
              </div>

              <div className="signindiv">
                <input className="signin" type="button" value="Sign In" />
              </div>

              <div className="buttondiv">
                <button className="dd2" onClick={hideModal}></button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
