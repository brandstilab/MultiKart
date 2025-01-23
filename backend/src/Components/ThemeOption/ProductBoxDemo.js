import SettingContext from "@/Helper/SettingContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { RiAddBoxFill, RiAddBoxLine, RiAddLine, RiArrowUpCircleFill, RiHeartLine, RiShoppingCartLine, RiStarFill, RiSubtractLine } from "react-icons/ri";
import { ProductRating, ProductOption } from "./ProductOptions";
// import { Star } from "react-feather";

const ProductBoxDemo = () => {
  const { convertCurrency } = useContext(SettingContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="product-box">
        <div className="product-image">
          <Image
            height={208}
            width={95.28}
            className="img-fluid"
            src="/assets/images/product.png"
            alt="product"
          />
          <ProductOption />
        </div>
        <div className="product-detail">
          <h6 className="name">Fresh Pear</h6>
          <p>
            They have been linked to a number of health benefits,
            includingimproved digestion, heart health, and blood sugar control.
          </p>
          <h6 className="unit mt-1">3 KG</h6>
          <h6 className="byers">By Fruits Market</h6>
          <h5 className="sold text-content">
            <span className="theme-color price">{convertCurrency(4.8)}</span>
            <del className>{convertCurrency(6.0)}</del>
          </h5>
          <ProductRating />
          <div className="add-to-cart-box">
            <button
              type="button"
              className="addcart-button btn btn-add-cart"
              onClick={() => setOpen((prev) => !prev)}
            >
              Add
            </button>
            <div className={`cart_qty qty-box ${open ? "open" : ""}`}>
              <div className="input-group">
                <button
                  type="button"
                  className="qty-left-minus"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <RiSubtractLine />
                </button>
                <input
                  type="text"
                  defaultValue={1}
                  name="quantity"
                  readOnly
                  className="form-control input-number qty-input"
                />
                <button
                  type="button"
                  className="qty-left-plus"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <RiAddLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-style-1">
        <div className="product-image">
          <div className="label-flex">
            <div className="discount">
              <label>20%</label>
            </div>
            <button
              type="button"
              className="btn p-0 wishlist btn-wishlist notifi-wishlist"
            >
              <RiHeartLine />
            </button>
          </div>
          <a>
            <Image
              height={208}
              width={95.28}
              className="img-fluid"
              src="/assets/images/product.png"
              alt="product"
            />
          </a>
          <ProductOption />
        </div>
        <div className="product-detail">
          <h6 className="name">Fresh Pear</h6>
          <h5 className="sold text-content">
            <span className="theme-color price">{convertCurrency(4.8)}</span>
            <del className="ms-1">{convertCurrency(6.0)}</del>
          </h5>
          <ProductRating ratingClassName={"mb-2"} />
          <div className="add-to-cart-box">
            <button
              type="button"
              className="addcart-button btn btn-add-cart"
              onClick={() => setOpen((prev) => !prev)}
            >
              Add to Cart
            </button>
            <div className={`cart_qty qty-box ${open ? "open" : ""}`}>
              <div className="input-group">
                <button
                  type="button"
                  className="qty-left-minus"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <RiSubtractLine />
                </button>
                <input
                  type="text"
                  defaultValue={1}
                  name="quantity"
                  readOnly
                  className="form-control input-number qty-input"
                />
                <button
                  type="button"
                  className="qty-left-plus"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <RiAddLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-style-2">
        <div className="product-image">
          <div className="label-flex">
            <div className="discount">
              <label>20%</label>
            </div>
            <button
              type="button"
              className="btn p-0 wishlist btn-wishlist notifi-wishlist"
            >
              <i className="iconly-Heart icli" />
            </button>
          </div>
          <a>
            <Image
              height={208}
              width={95.28}
              className="img-fluid"
              src="/assets/images/product.png"
              alt="product"
            />
          </a>
          <ProductOption />
        </div>
        <div className="product-detail">
          <h6 className="name">Premium Organic Pumpkin</h6>
          <ProductRating ratingClassName={"mb-2"} />
          <div className="product-bottom">
            <h5 className="sold text-content">
              <span className="theme-color price">{convertCurrency(5.2)}</span>
              <del className="ms-1">{convertCurrency(6.5)}</del>
            </h5>
            <div className="add-to-cart-box">
              <button
                type="button"
                className="addcart-button btn btn-add-cart"
                onClick={() => setOpen((prev) => !prev)}
              >
                Add
              </button>
              <div className={`cart_qty qty-box ${open ? "open" : ""}`}>
                <div className="input-group">
                  <button
                    type="button"
                    className="qty-left-minus"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <RiSubtractLine />
                  </button>
                  <input
                    type="text"
                    defaultValue={1}
                    name="quantity"
                    readOnly
                    className="form-control input-number qty-input"
                  />
                  <button
                    type="button"
                    className="qty-left-plus"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <RiAddLine />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-box product-white-bg">
        <div className="product-image">
          <a><Image height={208} width={95.28} className="img-fluid" src="/assets/images/product.png" alt="product" /></a>
          <ProductOption />
        </div>
        <div className="product-detail position-relative">
          <h6 className="name">Premium Organic Pumpkin</h6>
          <h6 className="sold weight mb-0 text-content fw-normal ">2 KG</h6>
          <div className="d-flex align-items-end justify-content-between position-relative">
            <h6 className="price theme-color m-0">{convertCurrency(5.20)}</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
              <button type="button" className="active addcart-button btn btn-add-cart" onClick={() => setOpen((prev) => !prev)}>
              </button>
              <div className={`cart_qty qty-box ${open ? "open" : ""}`}>
                <div className="input-group">
                  <button type="button" className="qty-left-minus" onClick={() => setOpen((prev) => !prev)}><RiSubtractLine /></button>
                  <input
                    type="text"
                    defaultValue={1}
                    name="quantity"
                    readOnly
                    className="form-control input-number qty-input"
                  />
                  <button
                    type="button"
                    className="qty-left-plus"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <RiAddLine />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-theme-box">
        <div className="img-box ratio_50">
          <a>
            <Image
              height={208}
              width={95.28}
              className="img-fluid"
              src="/assets/images/product.png"
              alt="product"
            />
          </a>
          <a className="heart-icon">
            <RiHeartLine />
          </a>
        </div>
        <div className="content-box">
          <div className="top-content">
            <a>
              <h5>Premium Organic Pumpkin</h5>
            </a>
            <h6>by <a> Natures Basket Mart</a> in <a>Vegetables & Fruits</a></h6>
            <div className="product-rating review-rating">
              <ul className="rating">
                <li>
                  <RiStarFill />
                </li>
                <li>
                  <RiStarFill />
                </li>
                <li>
                  <RiStarFill />
                </li>
                <li>
                  <RiStarFill />
                </li>
                <li>
                  <RiStarFill />
                </li>
              </ul>
              <span>(3.6)</span>
            </div>
          </div>
          <div className="bottom-content">
            <div>
              <span>8 Sales</span>
              <h5 className="price">{convertCurrency(5.20)}</h5>
            </div>
            <div className="btn-grp">
              <button type="button" className={`addcart-button btn btn-add-cart ${open ? "active" : ""}`} onClick={() => setOpen((prev) => !prev)}>
                <RiShoppingCartLine />
              </button>
              <a className="btn">Preview</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductBoxDemo;
