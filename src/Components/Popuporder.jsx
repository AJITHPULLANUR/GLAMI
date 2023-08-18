import html2canvas from 'html2canvas';
import React, { useRef } from 'react'

const Popuporder = ({cart,setCart,handleChange,price}) => {
    
    const cartRef = useRef(null);

  const handleShareScreenshot = async () => {
    const cartElement = cartRef.current;

    if (!cartElement) return;

    try {
      const canvas = await html2canvas(cartElement);
      const screenshotData = canvas.toDataURL('image/jpeg');

      const cartItemsMessage = cart
        .map(item => `${item.title} - ₹${item.originalprice}  Quantity ${item.amount}\n `)
        .join('\n');

      const whatsappMessage = `Check out my cart!\n\n${cartItemsMessage} \n\nTotal=₹${price} \n`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://api.whatsapp.com/send?phone=918075569213&text=Hey%2C%20i%20have%20some%20Orders${encodedMessage}&data={encodeURIComponent(
        screenshotData
      )}`;

      window.open(whatsappURL, '_blank');
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  return (
    <div>
        <button className='booknowbutton2' onClick={handleShareScreenshot}>ORDER NOW</button>
  <div ref={cartRef}>
        
      </div>
    </div>
  )
}

export default Popuporder