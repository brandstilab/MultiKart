import Btn from "@/Elements/Buttons/Btn";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Row } from "reactstrap";
import ProductDeliveryInformation from "../Common/ProductDeliveryInformation";
import ProductInformation from "../Common/ProductInformation";

const ProductDescription = ({ productState }) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Row className="product-accordion">
      <Col sm="12">
        <Accordion open={open} toggle={toggle} className="theme-accordion">
          <AccordionItem className="card">
            <AccordionHeader className="card-header" targetId="1">
              <h5 className="mb-0">
                <Btn color="transparent" className="btn-link ">
                  {t("ProductDescription")}
                </Btn>
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="1" className="card-body">
              <p> {productState?.product?.short_description}</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="card">
            <AccordionHeader targetId="2" className="card-header">
              <h5 className="mb-0">
                <Btn color="transparent" className="btn-link ">
                  {t("Information")}
                </Btn>
              </h5>
            </AccordionHeader>
            <AccordionBody accordionId="2" className="card-body pt-0">
              <ProductInformation productState={productState} />
              <ProductDeliveryInformation productState={productState} />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
    </Row>
  );
};

export default ProductDescription;
