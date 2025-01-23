import BrandContext from "@/Context/BrandContext"; // Assuming the path is correct
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const Brands = () => {
  const { brandState, isLoading, refetch } = useContext(BrandContext);
  const { setCollectionMobile } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen(id);
    } else {
      setOpen(id);
    }
  };
  useEffect(() => {
    setCollectionMobile(false);
  }, []);

  return (
    <Accordion open={open} toggle={toggle} className="collection-filter-block">
      <div className="collection-mobile-back" onClick={() => setCollectionMobile(false)}>
        <span className="filter-back">
          <RiArrowLeftSLine /> {t("Back")}
        </span>
      </div>

      <AccordionItem>
        <div className="border-0 accordion-item">
          <AccordionHeader targetId="1">Brand</AccordionHeader>
          <AccordionBody accordionId="1" className="accordion-collapse show" id="brand-collapse">
            <div className="collection-brand-filter custom-sidebar-height">
              <ul className="category-list">
                {brandState.map((brand, i) => (
                  <li key={i}>
                    <a href={Href}>{brand?.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionBody>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Brands;
