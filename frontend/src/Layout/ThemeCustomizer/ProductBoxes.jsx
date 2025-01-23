import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href, ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AccordionBody, AccordionHeader, AccordionItem, Row } from "reactstrap";

const ProductBoxes = () => {
  const productBoxOptions = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
  const { t } = useTranslation("common");
  const [active, setActive] = useState("");
  const { setVariant } = useContext(ThemeOptionContext);

  useEffect(() => {
    setVariant(`product_box_${active?.toLowerCase()}`);
  }, [active]);

  return (
    <AccordionItem>
      <AccordionHeader targetId="2">
        <span className="setting-description-text">
          <span>10+ {t("ProductBoxLayout")}</span>
          <span className="setting-content">{t("DiscoverMoreProductVariations")}</span>
        </span>
      </AccordionHeader>
      <AccordionBody accordionId="2">
        <div className="setting-contant">
          <Row className="row-cols-2 g-sm-4 g-3 demo-section">
            {productBoxOptions?.map((item, i) => (
              <div className="text-center demo-effects " key={i}>
                <div className="set-position" onClick={() => { setActive(item); }} >
                  <Link className={`layout-container ${active == item ? "active" : ""}`} href={Href}>
                    <Image className="img-fluid bg-img bg-top" src={`${ImagePath}/product_box/${item.toLowerCase()}.png`} height={275} width={180} alt={`demo${i + 1}`} />
                  </Link>
                  <Link className="demo-text" href={Href}>
                    <h4>
                      {t("Style")} {item}
                    </h4>
                  </Link>
                </div>
              </div>
            ))}
          </Row>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default ProductBoxes;
