import request from "@/Utils/AxiosUtils";
import { ThemeAPI } from "@/Utils/AxiosUtils/API";
import { storageURL } from "@/Utils/Constants";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { AccordionBody, AccordionHeader, AccordionItem, Col, Row } from "reactstrap";

const Demos = () => {
  const { data, isLoading } = useQuery([ThemeAPI], () => request({ url: ThemeAPI }), { enabled: true, refetchOnWindowFocus: false, select: (res) => res?.data.data });
  const { t } = useTranslation("common");
  return (
    <AccordionItem>
      <AccordionHeader targetId="1">
        <span className="setting-description-text">
          <span>50+ {t("Demos")}</span>
          <span className="setting-content">{t("Explore")} 50+ {t("Demos")}</span>
        </span>
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <div className="setting-contant">
          <Row className="demo-section g-sm-4 g-3">
            {data?.map((item, i) => (
              <Col xs="6" className="text-center demo-effects" key={i}>
                <div className="set-position">
                  <Link className="layout-container" href={`/?theme=${item?.slug}`}>
                    <Image className="img-fluid bg-img bg-top" src={storageURL + item?.image} height={130} width={180} alt={`demo${i + 1}`} />
                  </Link>
                  <Link className="demo-text" href={`/?theme=${item?.slug}`}>
                    <h4>{item?.name}</h4>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default Demos;
