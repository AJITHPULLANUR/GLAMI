import React, { useEffect, useRef, useState } from 'react'
import logo from './Logo and Icons/—Pngtree—salon logo_6942006.png'
import home from './Logo and Icons/home.png'
import { Link } from 'react-router-dom'
import Footer2 from './Footer/Footer2'
import html2canvas from 'html2canvas'

const Cart = ({cart,setCart,handleChange}) => {
  const [price,setPrice]=useState(0)
  const handlePrice =()=>{
  let ans =0;
  cart.map((item)=>(
  ans += item.amount * item.originalprice
  ))
  setPrice(ans);
}

// localStorage,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const [isModalVisible, setModalVisible] = useState(false);

const showModal = () => {
  if (!userData.name || !userData.address || !userData.mobile) {
    alert("Please fill in all the required fields.");
    return;
    }
  setModalVisible(true);
  setInvoiceNumber((prevInvoiceNumber) => prevInvoiceNumber + 1);
};

const hideModal = () => {
  setModalVisible(false);
};


/////////////////////////////////////////////////////







const handleRemove =(id)=>{
  const arr =cart.filter((item)=>item.id !== id);
  setCart(arr);
  handlePrice();

}




useEffect (()=>{
  handlePrice();
})








// const cartRef = useRef(null);

// const handleShareScreenshot = async () => {
//   const cartElement = cartRef.current;

//   if (!cartElement) return;

//   try {
//     const canvas = await html2canvas(cartElement);
//     const screenshotData = canvas.toDataURL('image/jpeg');

//     const whatsappURL = `https://wa.me/?text=Check out my cart!&data=${encodeURIComponent(screenshotData)}`;

//     window.open(whatsappURL, '_blank');
//   } catch (error) {
//     console.error('Error capturing screenshot:', error);
//   }
// };




// const  [userData,setUserData]=useState({
//   name:'',
//   mobile:'',
//   address:'',
// });

// const handleInput =(event) =>{
//   const {name,value}=event.target;
//   setUserData({
//     ...userData,[name]:value,
//   })
//   localStorage.setItem('userDetails', JSON.stringify(userData));


// }


// const handleCheckOut =()=>{
//   localStorage.setItem('userDetails', JSON.stringify(userData));
// }


const [userData, setUserData] = useState({
  name: '',
  mobile: '',
  address: '',
  
});



const handleInputChange2 = (event) => {
  const { name, value } = event.target;
  setUserData({
    ...userData,
    [name]: value,
  });
};

const handleCheckout = () => {
  // Save the userData array in the localStorage
  localStorage.setItem('userDetails', JSON.stringify(userData));
  // Proceed with the checkout process
  // ...
};






// whatasppp



const cartRef = useRef(null);

  const handleShareScreenshot = async () => {
    const cartElement = cartRef.current;

    if (!cartElement) return;

    try {
      const canvas = await html2canvas(cartElement);
      const screenshotData = canvas.toDataURL('image/jpeg');
      const Userinfo = `Name : ${userData.name} \n Address: ${userData.address} \n Mobile: ${userData.mobile}` 
      const cartItemsMessage = cart
        .map(item => `${item.title} - ₹${item.originalprice}  Quantity ${item.amount}\n `)
        .join('\n');
       

        


 
      const whatsappMessage = `Check out my cart!\n\n${Userinfo}\n\n${cartItemsMessage}     \n\nTotal=₹${price}  \n`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://api.whatsapp.com/send?phone=918075569213&text=Hey%2C%20i%20have%20some%20Orders${encodedMessage}&data={encodeURIComponent(
        screenshotData
      )}`;

      window.open(whatsappURL, '_blank');
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };



// dataandtimeqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq



const [invoiceNumber, setInvoiceNumber] = useState(1);


const currentDate = new Date();
  const invoiceDate = currentDate.toLocaleDateString();



  





  return (
    <div>
     
<div className='cartfulldiv'>


<div className="itemboxcart">
{cart?.map((item)=>
<div  className="itemeachcart">
<div className="itempicturecart">
  <img width="180px" height="180px"   className="imageofitems" src={item.img} alt="" />
  </div>
  <div className='itemdetailscart'>

  
  <div className="nameofitem">
                    <span className="itemhead">{item.title}</span>
                  </div>
                  <div className="price">
                    <ul>
                      {" "}
                      <li>
                        <span className="originalprice">₹{item.originalprice} </span>
                        <span className="oldprice">{item.oldprice}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{item.offertext}</span>
                      </li>
                      <li>
                        {" "}
                        <span className="offertext">{item.save}</span>
                      </li>
                  
                    </ul>
                    
                  </div>
                  <div className="time">
                    <img width="20px" height="20px" src={item.png} alt="" />
                    <span>{item.time}</span>
                  </div>


                  <div className='addorremovemedia'>
    <div className='buttonsofcartall'>
    <button className='buttonofadd' onClick={()=>handleChange(item,-1)}>-</button>
    <h6>{item.amount}</h6>
    <button className='buttonofadd' onClick={()=>handleChange(item,+1)}>+</button>
    </div>
  
  {/* <span>{item.originalprice}</span> */}
  
  <div className='removebuttondiv'>
  <button className='buttonofremove' onClick={()=>handleRemove(item.id)}>Remove</button>
  </div>
  </div>

 
  
  </div>
  <div className='addorremove'>
    <div className='buttonsofcartall'>
    <button className='buttonofadd' onClick={()=>handleChange(item,-1)}>-</button>
    <h6>{item.amount}</h6>
    <button className='buttonofadd' onClick={()=>handleChange(item,+1)}>+</button>
    </div>
  
  {/* <span>{item.originalprice}</span> */}
  
  <div className='removebuttondiv'>
  <button className='buttonofremove' onClick={()=>handleRemove(item.id)}>Remove</button>
  </div>
  </div>
</div>
)}



</div>

<div className='totalamountdiv'>


<div className='totalamount'>
  <div className='detailstext'>





















 





    <h4>Order Details</h4>

  </div>
  <div className='pricediv'>


<div className='addresdiv'>

  <div className='addressoptions'>

  <form class="form">
    <span class="title">ENTER YOUR ADDRESS </span>
        

    <div class="inputbox">
    <input required="required" name='name'  placeholder="Name" value={userData.name} onChange={handleInputChange2}    
                  />










      <input required="required" name='mobile' value={userData.mobile} onChange={handleInputChange2} placeholder='mobile' />
      <input required="required" name='address' value={userData.address} onChange={handleInputChange2} placeholder='Address'/>

</div>
 
   
</form>
  

  </div>


</div>




<div className='totalpricebox'>

<h4>Total Amount </h4>
<div className='priceshow'>


  <h4>  - ₹{price}</h4></div></div>

  <div className='cartorder'>
  <button className='booknowbutton2' onClick={()=>{showModal()}}>PLACE ORDER</button>
  </div>
  </div>


 
  <div className='companyname'>
    GLAMI MAKEOVER
  </div>
  

</div>


{isModalVisible && (
          <div className="modal2">
            <div className="modal-content2">
              
            <div className="buttondiv">
                <button className="dd" onClick={hideModal}></button>
              </div><br />

              <div className='fulldetailsofdetails'>

               
                <div className='addressonly'> 
                <div className='addressoff'>
                <h6 className='nameofpopup'>Name :-{userData.name}</h6>
                <h6 className='nameofpopup'>Mobile :-{userData.mobile}</h6>
                <h6 className='nameofpopup'>Address :-{userData.address}</h6>
                </div>
                <div className='addressoff2'>
                <span className="nameofpopup">Invoice Date : {invoiceDate}</span>
                <span className="nameofpopup">Invoice Number : M{invoiceNumber}</span>
                </div>
                <div className='headingsofpopup'>
                <h6 className='itemsmargin'>Items</h6>
                <h6 className='pricemargin'>Price</h6>
                <h6 className='quantitymargin'>Quantity</h6>
                </div>
                
                  
                </div>



              
                {cart.map((data)=>
                                  <div className='allordereditems'>

                

                  
                   

                    

                    
                  <div className='titleofpopup'>  <span className='sizeconvert'> {data.title}</span></div> 
                    
                   <div className='pricepopup'> <h6 className='sizeconvert'> ₹ {data.originalprice}</h6></div>
             <div className='amountpopup'><h6 className='sizeconvert'>{data.amount}</h6></div> 
                    

          

                  
                  
                </div>
              
               
 
              )}
            <br />

</div>



              

<div className='totalcash'>
            
            <h5>Total Amount : ₹  {price}</h5></div>

             

              <div className='buttonfororder'>
        <button className='booknowbutton2' onClick={handleShareScreenshot}>ORDER NOW</button>
  <div ref={cartRef}>
        
      </div>
    </div>
            </div>
          </div>
        )}






</div>
</div>
<Footer2/>
    </div>
  )

}


export default Cart











