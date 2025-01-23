import Pagination from "@/Components/Widgets/Pagination";
import SellerSkeleton from "@/Components/Widgets/SkeletonLoader/SellerSkeleton";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { RiArrowRightLine } from "react-icons/ri";
import { Col } from "reactstrap";
import StoreImage from "./StoreImage";
import StoreName from "./StoreName";
import StoreProduct from "./StoreProduct";
import StoreVendor from "./StoreVendor";

const StoreCard = ({ data, fetchStatus, setPage }) => {
  const { t } = useTranslation("common");
  const SkeletonItems = Array.from({ length: 20 }, (_, index) => index);
  return (
    <>
      {fetchStatus == "fetching"
        ? SkeletonItems?.map((_, i) => (
            <Col xxl={4} md={6} key={i}>
              <SellerSkeleton />
            </Col>
          ))
        : data?.data.length > 0 && (
            <>
              {data?.data.map((elem, i) => (
                <Col xxl={4} md={6} key={i}>
                  <div className="seller-grid-box seller-grid-box-1">
                    <div className="grid-image">
                      <Link href={`/seller/stores/${elem?.slug}`}>
                        <StoreImage customClass={"image"} elem={elem} />
                      </Link>
                      <StoreName elem={elem} />
                    </div>
                    <div className="grid-contain">
                      <StoreVendor elem={elem} />
                      <div className="seller-category">
                        <Link href={`/seller/stores/${elem?.slug}`} className="btn btn-sm theme-bg-color text-white fw-bold d-inline-flex">
                          {t("VisitStore")}
                          <RiArrowRightLine className="ms-2" />
                        </Link>
                        <StoreProduct elem={elem} />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
              <nav className="product-pagination mt-0">
                <div className="theme-pagination-block">
                  <Pagination current_page={data?.current_page} total={data?.total} per_page={data?.per_page} setPage={setPage} />
                </div>
              </nav>
            </>
          )}
    </>
  );
};

export default StoreCard;
