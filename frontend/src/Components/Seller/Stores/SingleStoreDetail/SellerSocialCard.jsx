import Link from "next/link";
import { useTranslation } from "react-i18next";
import { RiFacebookFill, RiInstagramLine, RiPinterestFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

const SellerSocialCard = ({ StoreData }) => {
  const { t } = useTranslation("common");
  return (
    <div className="vendor-share">
      <h6>{t("FollowUs")} :</h6>
      <div className="footer-social">
        <ul>
          {StoreData?.facebook && (
            <li>
              <Link href={String(StoreData?.facebook)} target="_blank">
                <RiFacebookFill />
              </Link>
            </li>
          )}
          {StoreData?.twitter && (
            <li>
              <Link href={String(StoreData?.twitter)} target="_blank">
                <RiTwitterFill />
              </Link>
            </li>
          )}
          {StoreData?.instagram && (
            <li>
              <Link href={String(StoreData?.instagram)} target="_blank">
                <RiInstagramLine />
              </Link>
            </li>
          )}
          {StoreData?.youtube && (
            <li>
              <Link href={String(StoreData?.youtube)} target="_blank">
                <RiYoutubeFill />
              </Link>
            </li>
          )}
          {StoreData?.pinterest && (
            <li>
              <Link href={String(StoreData?.pinterest)} target="_blank">
                <RiPinterestFill />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SellerSocialCard;
