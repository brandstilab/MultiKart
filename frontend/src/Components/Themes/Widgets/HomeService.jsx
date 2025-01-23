import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { Row } from "reactstrap";

const HomeServices = ({ services, type }) => {
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    if (services) {
      const filtered = services.filter((service) => service.status);
      setFilteredServices(filtered);
    }
  }, [services]);
  return (
    <>
      <Row className="g-sm-4 g-3">
        {filteredServices.map((service, index) => (
          <Fragment key={index}>
            {type === "simple" ? (
              <div className={` ${filteredServices.length === 4 ? "col-xl-3 col-md-6" : filteredServices.length === 3 ? "col-md-4" : filteredServices.length === 2 ? "col-md-6" : "col-12"}`}>
                <div className="service-block1">
                  <Image height={59} width={59} src={storageURL + service?.image_url} alt={service.title} />
                  <div className="service-skeleton-img"></div>
                  {/* <h4>{t(item?.name)}</h4> */}
                  <h4>{service.title}</h4>
                  <h4 className="skeleton-content-h4"></h4>
                  <p>{service.description}</p>
                  <p className="skeleton-content-p"></p>
                </div>
              </div>
            ) : (
              <div className={`${filteredServices.length === 4 ? "col-xl-3 col-sm-6" : filteredServices.length === 3 ? "col-lg-4 col-sm-6" : filteredServices.length === 2 ? "col-sm-6" : "col-12"}`}>
                <div className="service-block">
                  <div className="media">
                    <Image height={59} width={59} src={storageURL + service?.image_url} alt={service.title} />
                    <div className="skeleton-img-box"></div>
                    <div className="media-body">
                      <h4>{service.title}</h4>
                      <h4 className="skeleton-content-h4"></h4>
                      <p>{service.description}</p>
                      <p className="skeleton-content-p"></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </Row>

      {!filteredServices.length && <app-no-data className="no-data-added" text="no_service" />}
    </>
  );
};

export default HomeServices;
