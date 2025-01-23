import ProductIdsContext from "@/Context/ProductIdsContext";
import { Href, storageURL } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const ImageLink = ({ classes = {}, imgUrl, placeholder, link, height, width, homeBanner = true, bgImg = false }) => {
  const [bgImage, setBgImage] = useState(bgImg);
  const { filteredProduct } = useContext(ProductIdsContext);
  // const redirectToProduct = (productId) => {
  //   const product = filteredProduct.find((elem) => elem?.id == productId);
  //   const productRoute = product?.slug ? "product/" + product?.slug : Href;
  //   return productRoute;
  // };

  const redirectToProduct = (productId) => {
    const product = filteredProduct.find((elem) => elem?.id == productId);
    return product?.slug ? `product/${product.slug}` : null;
  };

  const productRoute = imgUrl?.redirect_link?.link_type === "product" ? redirectToProduct(imgUrl?.redirect_link?.link) : null;

  return (
    <>
      {imgUrl?.redirect_link?.link_type === "external_url" ? (
        <Link className="h-100" href={imgUrl?.redirect_link?.link || "/"} target="_blank">
          {bgImage ? <div className={`bg-size ${classes}`} style={{ backgroundImage: "url(" + (imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder) + ")" }}></div> : <Image src={imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder} className="bg-img w-100 img-fluid" alt="banner" height={height} width={width} />}
        </Link>
      ) : imgUrl?.redirect_link?.link_type === "collection" && !homeBanner ? (
        <Link className="h-100" href={imgUrl?.redirect_link?.link || Href} target="_blank">
          {bgImage ? <div className={`bg-size ${classes}`} style={{ backgroundImage: "url(" + (imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder) + ")" }}></div> : <Image src={imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder} className="bg-img w-100 img-fluid" alt="banner" height={height} width={width} />}
        </Link>
      ) : imgUrl?.redirect_link?.link_type === "collection" && homeBanner ? (
        <Link className="h-100" href={imgUrl?.redirect_link?.link ? `/category/${imgUrl?.redirect_link?.link}` : Href}>
          {bgImage ? <div className={`bg-size ${classes}`} style={{ backgroundImage: "url(" + (imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder) + ")" }}></div> : <Image src={imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder} className="bg-img w-100 img-fluid" alt="banner" height={height} width={width} />}
        </Link>
      ) : imgUrl?.redirect_link?.link_type === "product" && productRoute ? (
        <Link className="h-100" href={`/${productRoute}`}>
          {bgImage ? <div className={`bg-size ${classes}`} style={{ backgroundImage: `url(${imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder}` }}></div> : <Image src={imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder} className="bg-img w-100 img-fluid" alt="banner" height={height} width={width} />}
        </Link>
      ) : bgImage ? (
        <div className={`bg-size ${classes}`} style={{ backgroundImage: `url(${imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder}` }}></div>
      ) : (
        <Image src={imgUrl?.image_url ? storageURL + imgUrl?.image_url : placeholder} className="bg-img w-100 img-fluid" alt="banner" height={height} width={width} />
      )}
    </>
  );
};

export default ImageLink;
