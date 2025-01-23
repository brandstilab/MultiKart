import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import React, { useContext } from "react";
import { Media } from "reactstrap";

const ProductServices = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <div className="collection-filter-block">
      <div className="product-service">
        {themeOption?.product?.services?.banners?.length &&
          themeOption?.product?.services?.banners.map(
            (service, index) =>
              service?.status && (
                <Media key={index}>
                  <Image height={40} width={40} src={storageURL + service?.image_url} alt={`service${index}`} />
                  <Media body>
                    <h4>{service?.title}</h4>
                    <p>{service?.description}</p>
                  </Media>
                </Media>
              )
          )}
      </div>
    </div>
  );
};

export default ProductServices;
