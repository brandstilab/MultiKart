import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import CompareContext from "@/Context/CompareContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { CompareAPI, WishlistAPI } from "@/Utils/AxiosUtils/API";
import { Href } from "@/Utils/Constants";
import { dateFormate } from "@/Utils/CustomFunctions/DateFormate";
import useCreate from "@/Utils/Hooks/useCreate";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { RiHeartLine, RiShuffleLine } from "react-icons/ri";
import { Col } from "reactstrap";
import ProductContent from "../Common/ProductContent";
import ProductWholesale from "../Common/ProductWholesale";
import VendorContains from "../Common/VendorContains";
import DigitalImage from "./DigtitalImage";

const ProductDigital = ({ productState, setProductState }) => {
  const router = useRouter();
  const [attribute, price, rating, sortBy, field, layout, category, checkLogin] = useCustomSearchParams(["attribute", "price", "rating", "sortBy", "field", "layout", "category", "checkLogin"]);
  const { setOpenCompareSidebar } = useContext(CompareContext);
  const { compareState, setCompareState } = useContext(CompareContext);
  const { data, mutated, isLoaddings } = useCreate(CompareAPI, false, false, "Added to Compare List");
  const { mutate, isLoading } = useCreate(WishlistAPI, false, false, "Added to Wishlist List");
  const { setOpenAuthModal } = useContext(ThemeOptionContext);

  const handelWishlist = (productState) => {
    if (Cookies.get("uat")) {
      mutate({ product_id: productState?.product?.id });
    } else {
      setOpenAuthModal(true);
    }
  };

  const addToCompare = (productState) => {
    if (!Cookies.get("uat")) {
      const queryParams = new URLSearchParams({ ...attribute, ...price, ...sortBy, ...field, ...rating, ...layout, ...category }).toString();
      setOpenAuthModal(true);
    } else {
      // Put your logic here
    }
  };
  useEffect(() => {
    if (data?.status == 200 || data?.status == 201) {
      setCompareState([...compareState, productObj]);
    }
  }, [isLoading, isLoaddings]);
  return (
    <WrapperComponent classes={{ sectionClass: "product-section section-b-space theme-product-section", row: "g-4" }} customCol={true}>
      <Col xl={8} lg={7}>
        <DigitalImage productState={productState} />
      </Col>
      <Col xl={4} lg={5} className="vendor-right-box">
        <div className="right-box-contain">
          <div className="main-right-box-contain">
            <div className="vendor-box">
              <VendorContains productState={productState} />
              <div className="vendor-detail">
                <p>{productState.product.short_description}</p>
              </div>
            </div>

            <ProductContent productState={productState} setProductState={setProductState} />
            <div className="buy-box">
              <a onClick={() => handelWishlist()}>
                <RiHeartLine />
                <span>{"Add to Wishlist"}</span>
              </a>

              <a onClick={() => addToCompare()}>
                <RiShuffleLine />
                <span>{"Add to Compare"}</span>
              </a>
            </div>

            <div className="pickup-box">
              <div className="product-title">
                <h4>{"Assets Information"}</h4>
              </div>

              <div className="product-info">
                <ul className="product-info-list product-info-list-2">
                  <li>
                    {"Created"} :<Link href={Href}>{dateFormate(productState?.product?.created_at)}</Link>
                  </li>
                  {productState.product.updated_at && (
                    <li>
                      {"Last Update "}:<Link href={Href}>{dateFormate(productState?.product?.updated_at)}</Link>
                    </li>
                  )}

                  {productState?.product?.tags?.length ? (
                    <li className="d-flex align-items-center">
                      <span>{"Tags"} :</span>
                      <ul className="tag-list">
                        {productState?.product?.tags?.map((tag, i) => (
                          <li key={i}>
                            <Link href={Href}>{tag.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {!productState?.product?.wholesales?.length ? (
          <>
            <ProductWholesale productState={productState} />
          </>
        ) : null}
      </Col>
    </WrapperComponent>
  );
};

export default ProductDigital;
