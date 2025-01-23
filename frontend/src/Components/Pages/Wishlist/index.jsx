"use client";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import WishlistContext from "@/Context/WishlistContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { Href } from "@/Utils/Constants";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiShoppingCartLine } from "react-icons/ri";
import { Table } from "reactstrap";
import emptyImage from "/public/assets/svg/empty-items.svg";

const WishlistContent = () => {
  const { wishlistProducts, WishlistAPILoading } = useContext(WishlistContext);
  const { t } = useTranslation("common");
  const { setCartCanvas } = useContext(ThemeOptionContext);
  const { handleIncDec, openCartSidebar } = useContext(CartContext);
  const removeFromWishlist = (product) => {
    //  Put your logic here
  };
  const { convertCurrency } = useContext(SettingContext);

  const addToCart = (product) => {
    setCartCanvas(true);
    handleIncDec(1, product);
  };

  if (WishlistAPILoading) return <Loader />;

  return (
    <>
      <Breadcrumbs title={"Wishlist"} subNavigation={[{ name: "Wishlist" }]} />
      <WrapperComponent classes={{ sectionClass: "wishlist-section section-b-space", row: "g-sm-3 g-2", col: "table-responsive-xs", fluidClass: "container" }} colProps={{ sm: "12" }}>
        {wishlistProducts?.length > 0 ? (
          <div className="table-responsive">
            <Table className="cart-table">
              <thead>
                <tr className="table-head">
                  <th scope="col">{t("Image")}</th>
                  <th scope="col">{t("ProductName")}</th>
                  <th scope="col">{t("Price")}</th>
                  <th scope="col">{t("Availability")}</th>
                  <th scope="col">{t("Action")}</th>
                </tr>
              </thead>
              <tbody>
                {wishlistProducts?.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <Link href={`/product/${product?.slug}`}>
                        <img height={90} width={90} src={product?.product_galleries[0]?.original_url || product?.product_galleries[1]?.original_url} alt={product?.slug} />
                      </Link>
                    </td>
                    <td>
                      <Link href={`/product/${product?.slug}`}>{product?.name}</Link>
                      <div className="mobile-cart-content row">
                        <div className="col">
                          <p>{product?.stock_status?.replaceAll("_", " ")}</p>
                        </div>
                        <div className="col">
                          <h2>
                            {convertCurrency(product?.sale_price)} {product?.sale_price >= product?.price ? null : <del>{convertCurrency(product?.price)}</del>}
                          </h2>
                        </div>
                        <div className="col">
                          <div className="icon-box d-flex gap-2 justify-content-center">
                            <a href={Href} className="icon " onClick={() => removeFromWishlist(product)}>
                              <RiCloseLine />
                            </a>
                            <a href={Href} className="cart" onClick={() => addToCart(product)}>
                              <RiShoppingCartLine />
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2>
                        {convertCurrency(product?.sale_price)} {product?.sale_price >= product?.price ? null : <del>{convertCurrency(product?.price)}</del>}
                      </h2>
                    </td>
                    <td>
                      <p>{product?.stock_status?.replaceAll("_", " ")}</p>
                    </td>

                    <td>
                      <div className="icon-box d-flex gap-2 justify-content-center">
                        <a href={Href} className="icon " onClick={() => removeFromWishlist(product)}>
                          <RiCloseLine />
                        </a>
                        <a href={Href} className="cart" onClick={() => addToCart(product)}>
                          <RiShoppingCartLine />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <NoDataFound customClass="no-data-added" imageUrl={emptyImage} title="NoItemsAdded" description="NoWishListDescription" height="300" width="300" />
        )}
      </WrapperComponent>
    </>
  );
};

export default WishlistContent;
