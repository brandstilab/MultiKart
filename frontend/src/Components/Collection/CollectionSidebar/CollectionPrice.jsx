import { FilterPrice } from "@/Data/CustomData";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";

const CollectionPrice = ({ filter, setFilter, attributeAPIData, isOffCanvas }) => {
  const router = useRouter();
  const [category, attribute, sortBy, field, rating, layout] = useCustomSearchParams(["category", "attribute", "sortBy", "field", "rating", "layout"]);
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const checkPrice = (value) => {
    if (filter?.price?.indexOf(value) != -1) {
      return true;
    } else return false;
  };
  const applyPrice = (event) => {
    const index = filter?.price.indexOf(event?.target?.value);
    let temp = [...filter?.price];
    if (event.target.checked) {
      temp.push(event?.target?.value);
    } else {
      temp.splice(index, 1);
    }
    setFilter((prev) => {
      return {
        ...prev,
        price: temp,
      };
    });
    if (temp.length > 0) {
      const queryParams = new URLSearchParams({ ...category, ...attribute, ...sortBy, ...field, ...rating, ...layout, price: temp }).toString();
      router.push(`${pathname}?${queryParams}`);
    } else {
      const queryParams = new URLSearchParams({ ...category, ...attribute, ...sortBy, ...field, ...rating, ...layout }).toString();
      router.push(`${pathname}?${queryParams}`);
    }
  };

  return (
    <AccordionItem className={`open ${isOffCanvas ? "col-lg-3" : ""}`}>
      <AccordionHeader targetId={(attributeAPIData?.length + 3).toString()}>
        <span>{t("Price")}</span>
      </AccordionHeader>
      <AccordionBody accordionId={(attributeAPIData?.length + 3).toString()}>
        <div className="custom-sidebar-height">
          <ul className="shop-category-list ">
            {FilterPrice.map((price, i) => (
              <div key={i} className="form-check collection-filter-checkbox">
                <Input className="checkbox_animated" type="checkbox" id={`price-${price.id}`} value={price?.value} checked={checkPrice(price?.value)} onChange={applyPrice} />
                <Label className="form-check-label" htmlFor={`price-${price.id}`}>
                  {price?.price ? (
                    <span className="name">
                      {price.text} ${price.price}
                    </span>
                  ) : (
                    <span className="name">
                      ${price.minPrice} - ${price.maxPrice}
                    </span>
                  )}
                </Label>
              </div>
            ))}
          </ul>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default CollectionPrice;
