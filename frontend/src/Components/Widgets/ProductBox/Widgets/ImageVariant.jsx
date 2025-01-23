import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageVariant = ({ item, variant = "image_zoom", thumbnail, gallery_images, product, width, height }) => {
  return (
    <>
      {variant === "image_slider" ? (
        <Slider {...customOptions} onMouseLeave={stopAutoplay} onMouseEnter={startAutoplay}>
          {product.product_galleries?.map((image, index) => (
            <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={product.name} />
          ))}
        </Slider>
      ) : variant === "image_flip" ? (
        <div className="flip">
          {flipImage?.slice(0, 2)?.map((image, index) => (
            <div key={index} className={i == 0 ? "front" : "back"}>
              <Link href={`/product/${product.slug}`}>
                <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={product.name} />
              </Link>
            </div>
          ))}
        </div>
      ) : variant === "image_zoom" ? (
        <div className="zoom">
          <Link href={`/product/${product?.slug}`}>
            <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={product?.name} width={width} height={height} />
          </Link>
        </div>
      ) : (
        <Link href={`/product/${product.slug}`}>
          <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={product?.name} />
        </Link>
      )}
    </>
  );
};

export default ImageVariant;
