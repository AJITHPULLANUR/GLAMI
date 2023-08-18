
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Boutique.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Facialmain from "./Components/Facial/Facialmain";
import BridalMakeup from "./Makeup/BridalMakeup";
import Waxing from "./Components/Wax/Waxing";
import MetalicThreading from "./Components/Threading/MetalicThreading";
import HairCut from "./Components/HairCutting/HairCut";
import White from "./Components/HairColour/White";
import Gel from "./Components/Pedicure/Gel";
import Shellac from "./Components/Manicure/Shellac";
import Footer2 from "./Components/Footer/Footer2";
import Cart from "./Components/Cart";
import Popuporder from "./Components/Popuporder";

function App() {
  // const [cart, setCart] = useLocalStorage("MyCart",[]);
  const [show, setShow] = useState(true); // Add this line
  const [warning,setWarning]=useState(false)
  const [cart, setCart] = useLocalStorage("MyCart", []);

 


// function useLocalStorage(key,initialValue) {
// const [storedValue,setStoredValue ]=useState(()=>{
//   const item = localStorage.getItem(key)
//   return item?JSON.parse(item):initialValue;

// });

// useEffect(()=>{
//   localStorage.setItem(key,JSON.stringify(initialValue));
// },[key,storedValue])
// return [storedValue,setStoredValue]

// }


function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
  localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
  }








  const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
          if (item.id === product.id) isPresent = true;
        });
        if (isPresent) {
          setWarning(true);
          setTimeout(() => {
            setWarning(false);
          }, 2000);
          return;
        }
    
        setCart([...cart, item]);
      };
  











      

  



  // const handleChange = (item, d) => {
  //   const updatedCart = cart.map((cartItem) =>
  //   cartItem.id===item.id ? 
  //   { ...cartItem,amount: cartItem.amount+d}
  //   :cartItem)
  //   updatedCart.forEach((cartItem)=>{
  //     if (cartItem.amount < 1){
  //       cartItem.amount=1

  //     }
  //   })
  //   setCart (updatedCart)
  // }


  const handleChange = (item, d) => {
    const updatedCart = cart.map((cartItem) =>
    cartItem.id === item.id
    ? { ...cartItem, amount: cartItem.amount + d }
    : cartItem
    );
    updatedCart.forEach((cartItem) => {
    if (cartItem.amount < 1) {
    cartItem.amount = 1;
    }
    });
    
    setCart(updatedCart);
    };
    





  //     if (product.id === item.id) {
  //       const updatedProduct = { ...product, amount: Math.max(product.amount + d, 1) };
  //       return updatedProduct;
  //     }
  //     return product;
  //   });

  //   setCart(updatedCart);
  // };


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout size={cart.length} setShow={setShow} />} // Pass setShow here
          >
            <Route index element={<Home />} />
            
            <Route path="/Facialmain" element={<Facialmain handleClick={handleClick} />} />
            
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
{warning && alert("Item is already exists")}
            <Route path="/BridalMakeup" element={<BridalMakeup handleClick={handleClick} />} />
            <Route path="/Waxing" element={<Waxing handleClick={handleClick} />} />
            <Route path="/MetalicThreading" element={<MetalicThreading handleClick={handleClick} />} />
            <Route path="/Haircut" element={<HairCut handleClick={handleClick} />} />
            <Route path="/White" element={<White handleClick={handleClick} />} />
            <Route path="/Gel" element={<Gel handleClick={handleClick} />} />
            <Route path="/Shellac" element={<Shellac handleClick={handleClick} />} />
            <Route path="/Footer2" element={<Footer2 />} />
            <Route path="Popuporder" element={<Popuporder/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

