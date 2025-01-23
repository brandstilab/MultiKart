import Image from "next/image";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const FourImage = ({ productState }) => {
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const { t } = useTranslation("common");

  return (
    <div className="custom-2-grid sticky-top-product">
      {productState?.selectedVariation?.variation_galleries?.map((image, i) => (
        <div className="four-image-sec" key={i}>
          <div className="slider-image w-100 h-100 d-flex align-items-center justify-content-center">
            {videType.includes(image.mime_type) ? (
              <video className="w-100" controls>
                <source src={image ? image?.original_url : ""} type={image?.mime_type}></source>
              </video>
            ) : audioType.includes(image?.mime_type) ? (
              <div className="slider-main-img">
                <audio controls>
                  <source src={image ? image.original_url : ""} type={image.mime_type}></source>
                </audio>
              </div>
            ) : (
              image?.original_url && <Image src={image?.original_url} alt={image?.name} className="img-fluid w-100" height={320} width={320} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourImage;
