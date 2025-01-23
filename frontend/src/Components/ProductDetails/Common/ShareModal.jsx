import Btn from "@/Elements/Buttons/Btn";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Input, Modal, ModalBody, ModalHeader } from "reactstrap";

const ShareModal = ({ productState, modal, setModal }) => {
  const socialMediaIcons = ["ri-facebook-line", "ri-twitter-line", "ri-linkedin-line", "ri-whatsapp-line", "ri-mail-line"];
  const { slug } = productState?.product;
  const prodURL = process.env.API_PROD_URL;
  const [shareLink, setShareLink] = useState(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(prodURL + "/product/" + slug)}`);
  const { t } = useTranslation("common");

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    ToastNotification("success", "Link copied To Clipboard");
  };

  const handleShare = (shareOn) => {
    const mainMedia = shareOn.split("-")[1];
    if (mainMedia == "facebook") {
      setShareLink(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(prodURL + "/product/" + slug)}`);
    } else if (mainMedia == "twitter") {
      setShareLink(`https://twitter.com/intent/tweet?url=${encodeURIComponent(prodURL + "/product/" + slug)}`);
    } else if (mainMedia == "linkedin") {
      setShareLink(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(prodURL + "/product/" + slug)}`);
    } else if (mainMedia == "whatsapp") {
      setShareLink(`https://api.whatsapp.com/send?text=${encodeURIComponent(prodURL + "/product/" + slug)}`);
    } else if (mainMedia == "mail") {
      const subject = "Check out this awesome product!";
      const body = `I thought you might be interested in this product: ${prodURL + "/product/" + slug}`;
      const emailShareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = emailShareUrl;
    }
  };
  return (
    <Modal centered isOpen={modal} toggle={() => setModal(false)} className="theme-modal-2">
      <div className="">
        <ModalHeader>
          {t("Share")}
          <Btn className="btn-close" onClick={() => setModal(false)}>
            <RiCloseLine />
          </Btn>
        </ModalHeader>
        <ModalBody>
          <div className="bordered-box">
            <div className="product-social">
              {socialMediaIcons.map((item, i) => (
                <li key={i} onClick={() => handleShare(item)}>
                  <div style={{ cursor: "pointer" }}>
                    <i className={item} />
                  </div>
                </li>
              ))}
            </div>
            <form>
              <div className="gap-3 input-group form-box">
                <Input type="text" value={shareLink} onChange={(e) => setShareLink(e.target.value)} />
                <Btn className={`${shareLink.trim() ? "" : "disabled"} btn-solid buy-button`} onClick={copyLink}>
                  {t("CopyLink")}
                </Btn>
              </div>
            </form>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ShareModal;
