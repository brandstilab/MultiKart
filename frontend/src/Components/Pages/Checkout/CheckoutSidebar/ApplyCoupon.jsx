import SettingContext from "@/Context/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import request from "@/Utils/AxiosUtils";
import { CouponAPI } from "@/Utils/AxiosUtils/API";
import { Href, ImagePath } from "@/Utils/Constants";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCouponLine } from "react-icons/ri";
import { Col, Input, Row } from "reactstrap";
import CouponModal from "./CouponModal";

const ApplyCoupon = ({ data, setFieldValue, storeCoupon, setStoreCoupon, values, appliedCoupon, setAppliedCoupon, errorCoupon, mutate, isLoading }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  const onCouponApply = (value) => {
    setFieldValue("coupon", value);
    setStoreCoupon(value);
  };
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const { data: couponData, isLoading: couponLoader } = useQuery([CouponAPI], () => request({ url: CouponAPI, params: { status: 1 } }, router), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (data) => data.data.data,
  });
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setFieldValue("coupon", "");
    setStoreCoupon("");
    // Put your logic here
  };
  const onCouponApplyClick = () => {
    storeCoupon !== "" && setAppliedCoupon("applied");
    setFieldValue("coupon", storeCoupon);
    // Put your logic here
  };
  const onCopyCode = (couponData) => {
    navigator.clipboard.writeText(couponData);
    ToastNotification("success", "Code copied to clipboard");
  };

  return (
    <div className="promo-code-box">
      <div className="promo-title">
        <h5>{t("PromoCode")}</h5>
        <a href={Href} onClick={() => setToggle(true)}>
          <RiCouponLine /> {t("ViewAll")}
        </a>
      </div>
      <Row className="g-sm-3 g-2 mb-3">
        {couponData?.slice(0, 2).map((item, i) => (
          <Col xl="6" key={i}>
            <div className="coupon-box">
              <div className="card-name">
                <h6>{item?.title}</h6>
              </div>
              <div className="coupon-content">
                <div className="coupon-apply">
                  <h6 className="coupon-code success-color">#{item?.code}</h6>
                  <Btn color="transparent" title={"CopyCode"} className="theme-btn border-btn copy-btn mt-0" onClick={() => onCopyCode(item?.code)} />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {appliedCoupon == "applied" ? (
        <div className="offer-apply-box">
          <Image src={`${ImagePath}/offer.gif`} className="img-fluid" height={20} width={20} alt="offer" />
          <div>
            <h4>
              {t("Yousaved")} <span>{convertCurrency("10")}</span> {t("withthiscode")} 🎉 <p>{t("CouponApplied")}</p>
            </h4>
          </div>
          <a style={{ cursor: "pointer" }} className="close-coupon" onClick={() => removeCoupon()}>
            {t("Remove")}
          </a>
        </div>
      ) : (
        <>
          <div className="coupon-input-box">
            <Input type="text" value={values['coupon']} placeholder={t("EnterCoupon")} onChange={(e) => onCouponApply(e.target.value)} />
            <div>
              <Btn className="apply-button" onClick={onCouponApplyClick}>
                {t("ApplyNow")}
              </Btn>
            </div>
          </div>
        </>
      )}
      <CouponModal couponData={couponData} onCopyCode={onCopyCode} toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default ApplyCoupon;
