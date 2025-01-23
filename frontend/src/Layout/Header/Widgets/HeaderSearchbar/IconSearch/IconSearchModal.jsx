import ListProductBox from "@/Components/Collection/MainCollection/ListProductBox";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import ProductSkeleton from "@/Components/Widgets/SkeletonLoader/ProductSkeleton";
import Btn from "@/Elements/Buttons/Btn";
import request from "@/Utils/AxiosUtils";
import { CategoryAPI, ProductAPI } from "@/Utils/AxiosUtils/API";
import { ImagePath } from "@/Utils/Constants";
import useOutsideDropdown from "@/Utils/Hooks/useOutsideDropdown";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { useTypewriter } from "react-simple-typewriter";
import { Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const IconSearchModal = ({ setIsOpen, isOpen }) => {
  const { t } = useTranslation("common");
  const [searchValue, setSearchValue] = useState("");
  const [searchArr, setSearchArray] = useState([]);
  const [paginate, setPaginate] = useState(4);
  const pathName = usePathname();
  const [categorySearch, setCategorySearch] = useState(false);
  const [categoryCustomSearch, setCategoryCustomSearch] = useState("");
  const [categoryTc, setCategoryTc] = useState(null);
  const [productCustomSearch, setProductCustomSearch] = useState("");
  const [productTc, setProductTc] = useState(null);
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown();
  const router = useRouter();
  const { data, isLoading: productLoading, refetch: productRefetch, fetchStatus } = useQuery([ProductAPI, "Search"], () => request({ url: ProductAPI, params: { status: 1, search: productCustomSearch ? productCustomSearch : null, paginate: searchValue === "" ? 4 : paginate } }), { enabled: true, refetchOnWindowFocus: false, select: (data) => data.data.data });
  const { data: categoryData, refetch, isLoading: categoryIsLoading, fetchStatus: categoryFetchStatus } = useQuery(["CategoryAPIMinimalSearch"], () => request({ url: CategoryAPI, params: { status: 1, paginate: searchValue === "" ? 4 : paginate, search: categoryCustomSearch ? categoryCustomSearch : null } }), { enabled: isOpen, refetchOnWindowFocus: false, select: (data) => data.data.data });

  const [text] = useTypewriter({
    words: ["Search with brand and category..."],
    deleteSpeed: 120,
    loop: 0,
  });

  useEffect(() => {
    if (data) {
      setSearchArray(data?.slice(0, 5));
    }
  }, [productLoading, data]);

  // Added debouncing
  useEffect(() => {
    if (categoryTc) clearTimeout(categoryTc);
    setCategoryTc(setTimeout(() => setCategoryCustomSearch(searchValue), 500));

    if (productTc) clearTimeout(productTc);
    setProductTc(setTimeout(() => setProductCustomSearch(searchValue), 500));
  }, [searchValue]);

  // Getting users data on searching users
  useEffect(() => {
    !categoryIsLoading && categoryCustomSearch !== undefined && refetch();
    !productLoading && productCustomSearch !== undefined && productRefetch();
  }, [categoryCustomSearch, productCustomSearch]);

  const onChangeHandle = (text) => {
    // setCategorySearch(text);
    setSearchValue(text);
    // setProductCustomSearch(text);
    if (text !== "") {
      const search = data?.filter((item) => item?.name?.toLowerCase().includes(text.toLowerCase()));
      setSearchArray(search);
      setIsComponentVisible(true);
    } else {
      setSearchArray(data?.slice(0, 5));
      setIsComponentVisible(false);
    }
  };

  return (
    <Modal centered className="search-modal theme-modal-2" size="xl" isOpen={isOpen} toggle={() => setIsOpen(false)}>
      <ModalHeader tag={"div"}>
        <h3>{t("SearchInStore")}</h3>
        <Btn className="btn-close" onClick={() => setIsOpen(false)}>
          <RiCloseLine />
        </Btn>
      </ModalHeader>
      <ModalBody>
        <div className="search-box">
          <Input type="text" autoFocus placeholder={text + "|"} onChange={(e) => onChangeHandle(e.target.value)} value={searchValue} />
          <RiSearchLine />
        </div>
        <div className="search-category-box">
          <ul className="search-category-skeleton">
            {categoryFetchStatus == "fetching" || categoryData?.length ? <li className="text-secondary">{t("TopSearch")}</li> : null}
            {categoryFetchStatus == "fetching" ? new Array(4).fill(null).map((_, i) => <li className="skeleton-loader" />) : categoryData?.length ? categoryData?.slice(0, 4)?.map((item, i) => <li key={i}>{item?.name}</li>) : null}
          </ul>
        </div>
        <div className="mt-sm-4 mt-3">
          <h3 className="search-title">{t("MostSearched")}</h3>
          {fetchStatus == "fetching" ? (
            <Row className="row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3 row-empty-cls">
              {new Array(3).fill(null).map((_, i) => (
                <Col key={i}>
                  <ProductSkeleton />
                </Col>
              ))}
              <ProductSkeleton />
            </Row>
          ) : searchArr?.length > 0 ? (
            <Row className="row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3 row-empty-cls">
              {searchArr?.slice(0, 4)?.map((item, i) => (
                <Col key={i}>
                  <ListProductBox product={item} productBox={2} isOpen={isOpen} />
                  {/* <ProductBox style="vertical" product={item} /> */}
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataFound height={345} width={345} imageUrl={`/assets/svg/empty-items.svg`} customClass={"collection-no-data no-data-added"} description={"Please check if you have misspelt something or try searching with other way."} title={"NoProductFound"} />
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default IconSearchModal;
