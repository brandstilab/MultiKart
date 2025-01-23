import { FilterPaginateData } from "@/Data/CustomData";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const FilterPaginate = ({ filter, setFilter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [attribute, price, category, layout] = useCustomSearchParams(["attribute", "price", "category", "layout"]);
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState(filter?.paginate);

  const handleSort = (data) => {
    setState(data?.value);
    let queryParams = new URLSearchParams({ ...attribute, ...price, ...category, ...layout, paginate: data.value }).toString();
    setFilter((prev) => {
      return {
        ...prev,
        paginate: data.value,
      };
    });
    window.scroll(0, 0);
    router.push(`${pathname}?${queryParams}`);
  };
  return (
    <div className="product-page-filter">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          <span>{FilterPaginateData.find((elem) => elem.value == state)?.label || t("SortItem")}</span>
        </DropdownToggle>
        <DropdownMenu>
          <div>
            {FilterPaginateData.map((elem, i) => (
              <DropdownItem key={i} onClick={() => handleSort(elem)}>
                {elem.value} {t(elem.label.split(" ")[1])}
              </DropdownItem>
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FilterPaginate;
