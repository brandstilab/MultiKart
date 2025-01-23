import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Col } from "reactstrap";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import SettingContext from "../../Helper/SettingContext";
import { AddtoCartAPI } from "../../Utils/AxiosUtils/API";
import useCreate from "../../Utils/Hooks/useCreate";
import ProductVariationModal from "./ProductVariationModal";

import { useTranslation } from "react-i18next";
import CreateCartContext from "@/Helper/CartContext";
import { placeHolderImage } from "@/Data/CommonPath";

const ShowProduct = ({ productData, setFieldValue, values }) => {
  const { t } = useTranslation("common");
  const [modal, setModal] = useState();
  const { convertCurrency, settingObj } = useContext(SettingContext);
  const {handleAddToCart} = useContext(CreateCartContext)
  const { data, mutate, isLoading } = useCreate(AddtoCartAPI, false, false, true, (resDta) => {
    setModal(false);
  });
  useEffect(() => {
    // Taking data from API response
    if (data?.data?.items) {
      let productCopy = values["products"] ? [...values["products"]] : [];
      const index = productCopy.findIndex((item) => item.id === data?.data?.items[0].id);
      if (index == -1) {
        let initialTotal = [...values["products"], ...data?.data?.items]?.reduce((prev, curr) => {
          return prev + +curr.sub_total;
        }, 0);
        setFieldValue("total", initialTotal);
      } else {
        productCopy[index].quantity = productCopy[index]?.quantity + 1;
        productCopy[index].sub_total = productCopy[index].quantity * productCopy[index].product.sale_price;
        let total = values["products"]?.reduce((prev, curr) => {
          return prev + +curr.sub_total;
        }, 0);
        setFieldValue("total", total);
      }
      const cart = values["products"]?.map((value, index) => {
        if (value.id == data?.data?.items[0].id) {
          return data?.data?.items[0];
        } else {
          return value;
        }
      });
      setFieldValue("products", index !== -1 ? cart : [...values["products"], ...data?.data?.items]);
    }
  }, [data, isLoading]);
  const addProduct = (singleProduct, qty) => {
    if (singleProduct["type"] === "simple") {
      // API Call
      handleAddToCart(1, singleProduct)
      setModal(false)
    } else {
      setModal(singleProduct.id);
    }
  }
  return (
    <Col>
      <div className="product-box">
        <div className="product-image">
          <Image src={productData?.product_thumbnail?.original_url ?? placeHolderImage} alt="product Images" className="img-fluid" width={100} height={100} />
        </div>
        <div className="product-detail">
          <h6 className="name name-2 h-100" onClick={() => window.open(`${settingObj?.general?.site_url}/product/${productData.slug}`)}>
            {productData.name}
          </h6>{" "}
          <h6 className="sold weight text-content fw-normal">{productData?.unit}</h6>
          <div className="counter-box">
            <h6 className="sold theme-color">{convertCurrency(productData?.sale_price)}</h6>
            <div className="addtocart_btn">
              {productData?.product_type != "external" ? (
                productData?.stock_status == "in_stock" ? (
                  <Btn onClick={() => addProduct(productData, 1)} className={"add-button addcart-button btn buy-button"} id={productData.type === "classified" ? "" : "addcartbtn" + productData?.id}>
                    {t("Add")} <RiAddLine />
                  </Btn>
                ) : (
                  <Btn disabled={true} className="add-button addcart-button btn buy-button disabled">
                    {" "}
                    {t("Outofstock")}{" "}
                  </Btn>
                )
              ) : (
                <Btn onClick={() => window.open(productData?.external_url, "_blank")} className="add-button addcart-button btn buy-button">
                  {productData?.external_button_text ? productData.external_button_text : t("Buynow")}{" "}
                </Btn>
              )}
            </div>
          </div>
        </div>
      </div>
      <ShowModal open={productData.id == modal} setModal={setModal} modalAttr={{ className: "view-modal modal-lg theme-modal" }}>
        <ProductVariationModal productData={productData} values={values} setFieldValue={setFieldValue} setModal={setModal} mutate={mutate} isLoading={isLoading} />
      </ShowModal>
    </Col>
  );
};

export default ShowProduct;
