// import CartContext from "@/Context/CartContext";
// import SettingContext from "@/Context/SettingContext";
// import ThemeOptionContext from "@/Context/ThemeOptionsContext";
// import { Href } from "@/Utils/Constants";
// import React, { useContext, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { RiCloseFill } from "react-icons/ri";
// import HeaderCartBottom from "./HeaderCartBottom";

// const HeaderCartData = () => {
//   const { themeOption, setCartCanvas, cartCanvas } = useContext(ThemeOptionContext);
//   const { settingData } = useContext(SettingContext);
//   const { cartProducts, getTotal } = useContext(CartContext);
//   const { t } = useTranslation("common");
//   const [shippingCal, setShippingCal] = useState(0);
//   const [shippingFreeAmt, setShippingFreeAmt] = useState(0);
//   const [confetti, setConfetti] = useState(0);
//   const confettiItems = Array.from({ length: 150 }, (_, index) => index);
//   const [modal, setModal] = useState(false);
//   const [cartStyle, setCartStyle] = useState("");

//   useEffect(() => {
//     setCartStyle(themeOption?.general?.cart_style);
//     window.addEventListener("resize", () => {
//       if (window.innerWidth < 761) {
//         setCartStyle("cart_side");
//       }
//     });
//     return () => setCartStyle(themeOption?.general?.cart_style);
//   }, [themeOption, cartStyle, window.innerWidth]);

//   useEffect(() => {
//     setShippingFreeAmt(settingData?.general?.min_order_free_shipping);
//     cartProducts?.forEach((elem) => {
//       if (elem?.variation) {
//         elem.variation.selected_variation = elem?.variation?.attribute_values?.map((values) => values.value).join("/");
//       }
//     });
//   }, [cartProducts, settingData]);

//   useEffect(() => {
//     const tempCal = (getTotal(cartProducts) * 100) / (settingData?.general?.min_order_free_shipping || shippingFreeAmt);
//     let tempConfetti = confetti;
//     let timer;
//     if (tempCal > 100) {
//       setConfetti(1);
//       timer = setTimeout(() => {
//         setConfetti(2);
//       }, 4500);
//     } else {
//       setConfetti(0);
//     }
//     setShippingCal(tempCal);
//     return () => clearTimeout(timer);
//   }, [getTotal(cartProducts), shippingFreeAmt, cartProducts, settingData]);

//   return (
//     <>
//       <div id="cart_side" className={`${cartCanvas ? "open-side" : ""} ${cartStyle == "cart_mini" ? "show-div shopping-cart" : "add_to_cart right right-cart-box"}`}>
//         <a href={Href} className="overlay" onClick={()=>setCartCanvas(false)}/>
//         <div className="cart-inner">
//           <div className="cart_top">
//             <h3>
//               {t("MyCart")} <span>{`(${cartProducts?.length})`}</span>
//             </h3>
//             <div className="close-cart" onClick={() => setCartCanvas(false)}>
//               <a href={Href}>
//                 <RiCloseFill />
//               </a>
//             </div>
//           </div>
//           <HeaderCartBottom modal={modal} setModal={setModal} shippingCal={shippingCal} shippingFreeAmt={shippingFreeAmt} />
//         </div>
//         {themeOption?.general?.celebration_effect && confetti === 1 && cartCanvas && (
//           <div className="confetti-wrapper show">
//             {confettiItems.map((elem, i) => (
//               <div className={`confetti-${elem}`} key={i}></div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default HeaderCartData;

import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseFill } from "react-icons/ri";
import HeaderCartBottom from "./HeaderCartBottom";

const HeaderCartData = () => {
  const { themeOption, setCartCanvas, cartCanvas } = useContext(ThemeOptionContext);
  const { settingData } = useContext(SettingContext);
  const { cartProducts, getTotal } = useContext(CartContext);
  const { t } = useTranslation("common");
  const [shippingCal, setShippingCal] = useState(0);
  const [shippingFreeAmt, setShippingFreeAmt] = useState(0);
  const [confetti, setConfetti] = useState(0);
  const confettiItems = Array.from({ length: 150 }, (_, index) => index);
  const [modal, setModal] = useState(false);
  const [cartStyle, setCartStyle] = useState("");

  useEffect(() => {
    setCartStyle(themeOption?.general?.cart_style);
    const handleResize = () => {
      if (window.innerWidth < 761) {
        setCartStyle("cart_side");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      setCartStyle(themeOption?.general?.cart_style);
    };
  }, [themeOption]);

  // useEffect(() => {
  //   setShippingFreeAmt(settingData?.general?.min_order_free_shipping);
  //   cartProducts?.forEach((elem) => {
  //     if (elem?.variation) {
  //       elem.variation.selected_variation = elem?.variation?.attribute_values?.map((values) => values.value).join("/");
  //     }
  //   });
  // }, [cartProducts, settingData]);

  useEffect(() => {
    const total = getTotal(cartProducts);
    const shippingFreeAmount = settingData?.general?.min_order_free_shipping || shippingFreeAmt;
    const tempCal = (total * 100) / shippingFreeAmount;

    if (tempCal > 100) {
      setShippingCal(100);
      if (confetti === 0) {
        setConfetti(1);
        const timer = setTimeout(() => {
          setConfetti(2);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      setShippingCal(tempCal);
      setConfetti(0);
    }
  }, [ settingData, shippingFreeAmt, getTotal(cartProducts )]);

  return (
    <>
      <div id="cart_side" className={`${cartCanvas ? "open-side" : ""} ${cartStyle === "cart_mini" ? "show-div shopping-cart" : "add_to_cart right right-cart-box"}`}>
        <a href={Href} className="overlay" onClick={() => setCartCanvas(false)} />
        <div className="cart-inner">
          <div className="cart_top">
            <h3>
              {t("MyCart")} <span>{`(${cartProducts?.length})`}</span>
            </h3>
            <div className="close-cart" onClick={() => setCartCanvas(false)}>
              <a href={Href}>
                <RiCloseFill />
              </a>
            </div>
          </div>
          <HeaderCartBottom modal={modal} setModal={setModal} shippingCal={shippingCal} shippingFreeAmt={shippingFreeAmt} />
        </div>
        {themeOption?.general?.celebration_effect && confetti === 1 && cartCanvas && (
          <div className="confetti-wrapper show">
            {confettiItems.map((elem, i) => (
              <div className={`confetti-${elem}`} key={i}></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderCartData;
