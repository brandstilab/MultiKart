import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";

const CollectionAttributes = ({ attributeAPIData, filter, setFilter, isOffCanvas }) => {
  const router = useRouter();
  const [category, price, rating, sortBy, field, layout] = useCustomSearchParams(["category", "price", "rating", "sortBy", "field", "layout"]);
  const pathname = usePathname();
  const includedData = ["brand", "colour"];
  const { t } = useTranslation("common");

  const checkAttribute = (slug) => {
    if (filter?.attribute?.indexOf(slug) != -1) {
      return true;
    } else return false;
  };
  const applyAttribute = (event) => {
    const index = filter.attribute.indexOf(event?.target?.value);
    let temp = [...filter?.attribute];
    if (event.target.checked) {
      temp.push(event?.target?.value);
    } else {
      temp.splice(index, 1);
    }
    setFilter((prev) => {
      return {
        ...prev,
        attribute: temp,
      };
    });
    if (temp.length > 0) {
      const queryParams = new URLSearchParams({ ...category, ...price, ...rating, ...sortBy, ...field, ...layout, attribute: temp }).toString();
      router.push(`${pathname}?${queryParams}`);
    } else {
      const queryParams = new URLSearchParams({ ...category, ...price, ...rating, ...sortBy, ...field, ...layout }).toString();
      router.push(`${pathname}?${queryParams}`);
    }
  };
  return (
    <>
      {attributeAPIData?.length > 0 &&
        attributeAPIData
          ?.filter((item, i) => includedData.includes(item.name.toLowerCase()))
          .map((attribute, i) => (
            <AccordionItem className={`open ${isOffCanvas ? "col-lg-3" : ""}`} key={i}>
              <AccordionHeader targetId={(i + 3).toString()}>
                <span>{t(attribute?.name)}</span>
              </AccordionHeader>
              <div className="collapse show accordion-collapse ">
                <AccordionBody accordionId={(i + 3).toString()}>
                  <div className="custom-sidebar-height">
                    <ul className="shop-category-list">
                      {attribute?.attribute_values?.length > 0 &&
                        attribute?.attribute_values.map((value, index) => (
                          <li className="form-check collection-filter-checkbox" key={index}>
                            <Input className="checkbox_animated" type="checkbox" value={value?.slug} id={value?.value} checked={checkAttribute(value?.slug)} onChange={applyAttribute} />
                            <Label className="form-check-label color-label-box" htmlFor={value?.value}>
                              {attribute?.style === "color" && <div className="color-box" style={{ backgroundColor: value?.hex_color }}></div>}
                              <span className="name">{t(value?.value)}</span>
                            </Label>
                          </li>
                        ))}
                    </ul>
                  </div>
                </AccordionBody>
              </div>
            </AccordionItem>
          ))}
    </>
  );
};

export default CollectionAttributes;
