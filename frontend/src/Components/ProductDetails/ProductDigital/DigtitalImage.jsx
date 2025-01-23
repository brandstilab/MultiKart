import Btn from "@/Elements/Buttons/Btn";
import Image from "next/image";
import { useState } from "react";
import { RiHeadphoneLine, RiImage2Line, RiPlayLine, RiPlayListLine, RiShareBoxLine } from "react-icons/ri";
import VideoPlayModal from "../Common/AllModal/VideoPlayModal";
import ProductDetailsTab from "../Common/ProductDetailsTab";

const DigitalProductImage = ({ productState }) => {
  const [modal, setModal] = useState("");
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const activeModal = {
    image: <VideoPlayModal modal={modal} setModal={setModal} productState={productState} />,
  };
  return (
    <div className="product-left-box">
      <div className="row g-sm-4 g-2">
        <div className="col-12">
          <div className="position-relative">
            <div className="theme-option-box">
              <div className="theme-image-option">
                {productState?.product?.product_thumbnail && <Image src={productState?.product?.product_thumbnail.original_url} className="img-fluid  w-100 h-100" alt="slider-image" height={1080} width={1080} />}
                {productState?.product?.product_thumbnail && (
                  <div className="icon-btn-group">
                    {productState?.product?.product_thumbnail && videType.includes(productState?.product?.product_thumbnail?.mime_type) && (
                      <Btn className="theme-image-icon btn-md">
                        <RiPlayLine />
                      </Btn>
                    )}
                    {productState?.product?.product_thumbnail && audioType.includes(productState?.product?.product_thumbnail?.mime_type) && (
                      <Btn className="theme-image-icon btn-md">
                        <RiHeadphoneLine />
                      </Btn>
                    )}
                    {productState?.product?.product_galleries && productState?.product?.product_galleries?.length > 0 && (
                      <Btn className="theme-image-icon btn-md" onClick={() => setModal("image")}>
                        <RiImage2Line />
                        <span className="ms-2">{"Preview Image"}</span>
                      </Btn>
                    )}
                    {productState?.product?.preview_type == "url" ? (
                      <a className="theme-image-icon btn-md" href={productState?.product?.preview_url} target="_blank">
                        <RiShareBoxLine />
                        <span className="ms-2">{"Live Preview"}</span>
                      </a>
                    ) : productState?.product?.preview_type == "video" ? (
                      <Btn className="theme-image-icon  btn-md" onClick={() => setModal("image")}>
                        <RiPlayListLine />
                        <span className="ms-2">{"Preview Video"}</span>
                      </Btn>
                    ) : (
                      productState?.product?.preview_type == "audio" && (
                        <Btn className="theme-image-icon" onClick={() => setModal("image")}>
                          <RiPlayListLine />
                          <span className="ms-2">{"Preview Audio"}</span>
                        </Btn>
                      )
                    )}
                    {modal && activeModal[modal]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <ProductDetailsTab productState={productState} />
        </div>
      </div>
    </div>
  );
};
export default DigitalProductImage;
