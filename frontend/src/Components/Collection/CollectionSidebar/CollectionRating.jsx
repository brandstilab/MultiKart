import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { AccordionBody, AccordionHeader, AccordionItem, Input } from "reactstrap";
import RatingBox from "./RatingBox";

const CollectionRating = ({ filter, setFilter, attributeAPIData, isOffCanvas }) => {
  const RatingNumber = Array.from({ length: 5 }, (_, i) => i + 1).reverse();
  const router = useRouter();
  const [category, attribute, price, sortBy, field, layout] = useCustomSearchParams(["category", "attribute", "price", "sortBy", "field", "layout"]);

  const { t } = useTranslation("common");
  const pathname = usePathname();
  const checkRating = (value) => {
    if (filter?.rating?.indexOf(value) != -1) {
      return true;
    } else return false;
  };
  const applyRating = (event) => {
    const index = filter?.rating.indexOf(event?.target?.value);
    let temp = [...filter?.rating];
    if (event.target.checked) {
      temp.push(event?.target?.value);
    } else {
      temp.splice(index, 1);
    }
    setFilter((prev) => {
      return {
        ...prev,
        rating: temp,
      };
    });
    if (temp.length > 0) {
      const queryParams = new URLSearchParams({ ...category, ...attribute, ...price, ...sortBy, ...field, ...layout, rating: temp }).toString();
      router.push(`${pathname}?${queryParams}`);
    } else {
      const queryParams = new URLSearchParams({ ...category, ...attribute, ...price, ...sortBy, ...field, ...layout }).toString();
      router.push(`${pathname}?${queryParams}`);
    }
  };
  return (
    <AccordionItem className={`open ${isOffCanvas ? "col-lg-3" : ""}`}>
      <AccordionHeader targetId={(attributeAPIData?.length + 4).toString()}>
        <span>{t("Rating")}</span>
      </AccordionHeader>
      <AccordionBody className="collection-brand-filter" accordionId={(attributeAPIData?.length + 4).toString()}>
        <div className="custom-sidebar-height">
          <ul className="shop-category-list">
            {RatingNumber.map((elem, i) => (
              <div className="form-check collection-filter-checkbox" key={i}>
                <Input className="checkbox_animated" type="checkbox" value={elem} checked={checkRating(elem.toString())} onChange={applyRating} />
                <div className="form-check-label">
                  <RatingBox totalRating={elem} />
                  <span className="text-content">
                    ({elem} {t("Star")})
                  </span>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default CollectionRating;
