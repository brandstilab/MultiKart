import NoDataFound from "@/Components/Widgets/NoDataFound";
import BrandContext from "@/Context/BrandContext";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AccordionBody, Input, Label } from "reactstrap";

const CollectionBrand = ({ filter, setFilter }) => {
  const [category, attribute, price, rating, sortBy, field, layout] = useCustomSearchParams(["category", "attribute", "price", "rating", "sortBy", "field", "layout"]);
  const { brandState,isLoading,refetch } = useContext(BrandContext);
  const [showList, setShowList] = useState();
  const { t } = useTranslation("common");
  
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    !isLoading && setShowList(brandState);
  }, [brandState,isLoading]);

  const router = useRouter();
  const pathname = usePathname();
  const hasValue = (item, term) => {
    let valueToReturn = false;
    if (item && item["name"] && item["name"].toLowerCase().includes(term?.toLowerCase())) {
      valueToReturn = true;
    }
    return valueToReturn;
  };
  const handleChange = (event) => {
    const keyword = event.target.value;
    if (keyword !== "") {
      const updatedData = [];
      brandState?.forEach((item) => {
        hasValue(item, keyword) && updatedData.push(item);
      });
      setShowList(updatedData);
    } else {
      setShowList(brandState);
    }
  };
  const redirectToCollection = (event, slug) => {
    event.preventDefault();
    let temp = [...filter?.brand];

    if (!temp.includes(slug)) {
      temp.push(slug);
    } else {
      temp = temp.filter((elem) => elem !== slug);
    }
    setFilter((prev) => {
      return {
        ...prev,
        brand: temp,
      };
    });
    if (temp.length > 0) {
      const queryParams = new URLSearchParams({ ...category, ...attribute, ...price, ...sortBy, ...field, ...rating, ...layout, brand: temp }).toString();
      router.push(`${pathname}?${queryParams}`);
    } else {
      const queryParams = new URLSearchParams({ ...category, ...attribute, ...price, ...sortBy, ...field, ...rating, ...layout }).toString();
      router.push(`${pathname}?${queryParams}`);
    }
  };
  return (
    <div className="collapse show accordion-collapse collapsed ">
      <AccordionBody accordionId="2" className=" collection-brand-filter ">
        {brandState.length > 5 && (
          <div className="theme-form search-box">
            <Input type="search" placeholder={t("Search")} onChange={handleChange} />
          </div>
        )}
        <div className="custom-sidebar-height">
          {showList?.length > 0 ? (
            <ul className="shop-category-list ">
              {showList?.map((elem, i) => (
                <li key={i}>
                  <div className="form-check collection-filter-checkbox">
                    <Input className="checkbox_animated" type="checkbox" id={elem?.name} checked={filter?.brand?.includes(elem?.slug)} onChange={(e) => redirectToCollection(e, elem?.slug)} />
                    <Label className="form-check-label" htmlFor={elem?.name}>
                      <span className="name">{elem?.name}</span>
                    </Label>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <NoDataFound customClass="search-not-found-box" title="NoBrandFound" />
          )}
        </div>
      </AccordionBody>
    </div>
  );
};

export default CollectionBrand;
