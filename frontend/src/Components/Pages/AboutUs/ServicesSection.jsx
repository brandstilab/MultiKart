import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Container, Media, Row } from "reactstrap";

const ServicesSection = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation('common')
  return (
    <Container className="container about-cls section-b-space ">
      <section className="service border-section small-section">
        <Row className="g-sm-4 g-3">
          {themeOption?.about_us?.about?.futures?.map((service, i) => (
            <div className="service-block col-md-4" key={i}>
              <Media>
                <img src={storageURL + service?.icon} alt="Free Shipping" />
                <div className="skeleton-img-box"></div>
                <Media body>
                  {/* <h4>{t(item?.name)}</h4> */}
                  <h4>{t(service?.title)}</h4>
                  {/* <h4>{service?.title}</h4> */}
                  <h4 className="skeleton-content-h4"></h4>
                  <p>{service?.description}</p>
                  <p className="skeleton-content-p"></p>
                </Media>
              </Media>
            </div>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default ServicesSection;
